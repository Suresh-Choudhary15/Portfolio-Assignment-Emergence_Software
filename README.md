# 🤖 AI Portfolio Chat

A modern, full-stack personal portfolio website featuring an interactive AI Chat Assistant. The AI functions as a virtual recruiter or guide, answering questions about your professional background using real-time data from your resume.

---

## ✨ Features

- 📱 **Responsive Portfolio** — Clean, minimalist design built with Tailwind CSS
- 🧠 **AI Chat Assistant** — Context-aware bot that knows your experience, skills, and projects
- ⚡ **Streaming Responses** — Real-time, token-by-token streaming for a "ChatGPT-like" feel
- 📜 **Chat History** — Local persistence using SQLite to remember conversations
- 💰 **Cost-Effective** — Leverages the `openrouter/free` tier to keep API costs at zero
- 🌐 **Instant Deployment** — Quick public access using Cloudflare Tunnels without complex hosting

---

## 🛠 Tech Stack

| Frontend     | Backend       | AI / Infrastructure |
| ------------ | ------------- | ------------------- |
| React 18     | FastAPI       | OpenRouter API      |
| TypeScript   | Python 3.9+   | SQLite              |
| Vite         | aiohttp       | Cloudflare Tunnels  |
| Tailwind CSS | python-dotenv |                     |

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18+) & npm
- **Python** (3.9+) & pip
- **OpenRouter API Key** — [Get it here](https://openrouter.ai)
- **cloudflared** — [Download](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) _(Optional, for public sharing)_

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-ai-chat.git
cd portfolio-ai-chat
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the `backend` folder:

```env
OPENROUTER_API_KEY=sk-or-v1-xxxx  # your actual key
```

> Place your resume text in `backend/resume.txt` — this file acts as the "brain" for the AI.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:8000
```

---

## 💻 Running Locally

**Start the backend:**

```bash
cd backend
python main.py
```

Server runs at `http://localhost:8000`

**Start the frontend** (new terminal):

```bash
cd frontend
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 🌩 Deployment with Cloudflare Tunnels

Easily share your local environment with the world.

**1. Expose the backend:**

```bash
cloudflared tunnel --url http://localhost:8000
```

Copy the generated URL (e.g. `https://backend-id.trycloudflare.com`)

**2. Expose the frontend:**

```bash
cloudflared tunnel --url http://localhost:5173
```

Copy the second URL (e.g. `https://frontend-id.trycloudflare.com`)

**3. Sync:** Update `VITE_API_URL` in your frontend `.env` with the backend's public tunnel URL, then restart the frontend.

---

## ⚙️ Customization

- **Resume Data** — Edit `backend/resume.txt` to update the AI's knowledge base
- **AI Model** — Change the `MODEL` variable in `backend/openrouter.py`
- **UI/UX** — Modify Tailwind classes in the `/frontend/src/components` directory

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

- [OpenRouter](https://openrouter.ai) for free LLM access
- [Cloudflare](https://cloudflare.com) for seamless tunneling
- The FastAPI and React communities

---

## 😎 Regards

- **Suresh Choudhary**
