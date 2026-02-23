import os
import aiohttp
from typing import AsyncGenerator
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "openrouter/free"  # Free tier

async def stream_ai_response(messages: list) -> AsyncGenerator[str, None]:
    """
    Send conversation to OpenRouter and yield chunks of the assistant's reply.
    """
    if not OPENROUTER_API_KEY:
        logger.error("OPENROUTER_API_KEY not set")
        yield "Error: OpenRouter API key is missing. Please check your .env file."
        return

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": MODEL,
        "messages": messages,
        "stream": True,
    }

    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(OPENROUTER_URL, headers=headers, json=payload) as resp:
                if resp.status != 200:
                    error_text = await resp.text()
                    logger.error(f"OpenRouter error {resp.status}: {error_text}")
                    yield f"Error: AI service returned status {resp.status}. Please try again later."
                    return

                async for line in resp.content.iter_any():
                    # aiohttp streams raw bytes; we need to decode and split lines
                    # OpenRouter sends data as SSE: "data: {...}\n\n"
                    # We'll parse manually for simplicity
                    decoded = line.decode('utf-8')
                    for part in decoded.split("\n\n"):
                        if part.startswith("data: "):
                            data_str = part[6:]  # remove "data: "
                            if data_str == "[DONE]":
                                break
                            try:
                                import json
                                data = json.loads(data_str)
                                if "choices" in data and len(data["choices"]) > 0:
                                    delta = data["choices"][0].get("delta", {})
                                    if "content" in delta:
                                        yield delta["content"]
                            except json.JSONDecodeError:
                                continue
    except Exception as e:
        logger.exception("Exception during OpenRouter streaming")
        yield f"Error: {str(e)}"