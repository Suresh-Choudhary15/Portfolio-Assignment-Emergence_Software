import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

from database import insert_message, get_recent_messages
from openrouter import stream_ai_response

load_dotenv()

# Load system prompt from resume.txt
RESUME_PATH = os.path.join(os.path.dirname(__file__), "resume.txt")
try:
    with open(RESUME_PATH, "r", encoding="utf-8") as f:
        RESUME_TEXT = f.read()
except FileNotFoundError:
    RESUME_TEXT = "Resume file not found. Please provide resume.txt."

SYSTEM_PROMPT = f"""You are an AI assistant representing John Doe, a Full-Stack Developer. Answer questions about John's experience, skills, and projects based on the following resume. Be friendly, concise, and professional. If asked something not covered in the resume, politely say you don't have that information.

Resume:
{RESUME_TEXT}
"""

app = FastAPI(title="Portfolio AI Chat API")

# CORS for frontend (default Vite port 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://portfolio-assignment-emergence-software.pages.dev"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatMessage(BaseModel):
    role: str
    content: str
    timestamp: Optional[str] = None

@app.get("/")
async def root():
    return {"status": "ok", "message": "Portfolio AI Chat API is running"}

@app.get("/history")
async def get_history(limit: int = 50) -> List[ChatMessage]:
    """Return recent chat history (both user and assistant)."""
    msgs = get_recent_messages(limit)
    return [ChatMessage(**m) for m in msgs]

@app.post("/chat")
async def chat(request: ChatRequest):
    """Stream AI response to a user message."""
    user_message = request.message.strip()
    if not user_message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    # Insert user message into DB
    insert_message("user", user_message)

    # Retrieve last 10 messages for context (optional)
    recent = get_recent_messages(10)
    # Build conversation history for the AI
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for msg in recent:
        # skip system messages, only user/assistant
        if msg["role"] in ("user", "assistant"):
            messages.append({"role": msg["role"], "content": msg["content"]})

    # Streaming generator
    async def generate():
        full_reply = ""
        async for chunk in stream_ai_response(messages):
            full_reply += chunk
            yield chunk
        # After streaming completes, save assistant message
        insert_message("assistant", full_reply)

    return StreamingResponse(generate(), media_type="text/plain")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)