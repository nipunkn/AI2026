# AI2026
# 🤖 AI Assistant (v1.0)

A desktop AI Assistant built using **Electron + Python** with a **free, offline Large Language Model (LLM)**.  
The assistant runs locally on your machine, supports **voice responses**, and does **not require any paid APIs**.

This is **Version 1**, focused on a clean working foundation.  
More features are planned and under development.

---

## ✨ Features (v1)

- 🖥️ Desktop application (Electron)
- 🧠 Offline AI (no internet required after setup)
- 💬 Text-based chat interface
- 🔊 Voice responses (Text-to-Speech)
- 🔇 Voice ON / OFF toggle
- ⚡ Fast local inference using Ollama
- 🚀 Single command startup (`npm start`)
- 🧪 Easy to modify and extend

---

## 🛠️ Tech Stack

### Frontend
- **Electron**
- HTML, CSS, JavaScript

### Backend
- **Python**
- FastAPI

### AI / LLM
- **Ollama**
- **LLaMA 3** (local LLM model)

---

## 🧠 LLM Model Used

- **Model:** `llama3`
- **Provider:** Ollama (local runtime)
- **Type:** Offline, on-device Large Language Model

No OpenAI or paid APIs are used.

---

## 📦 Requirements (Before Running)

Make sure the following are installed on your system:

### 1️⃣ Node.js (v18+ recommended)
```bash
node -v
npm -v
2️⃣ Python (3.9+)
python --version
 Python (3.9+)
python --version
3️⃣ Ollama (Required for AI)
Download and install from:
from: https://ollama.com
download llm model:
>ollama pull llama3

##Project structure

AI2026/
│
├── app/                # Electron frontend (HTML/CSS/JS)
├── backend/            # Python backend (FastAPI)
│   └── ai/llm.py       # Ollama integration
├── electron/           # Electron main process
├── .venv/              # Python virtual environment
├── package.json
└── README.md


🚀 How to Run (Single Command)
1️⃣ Install dependencies
npm install
2️⃣ Start the app
npm start
This single command:
Starts the Python backend
Launches the Electron app
Connects to the local AI automatically
No manual terminal setup required


##🔊 Voice Controls
🔊 Speaker button → Enable voice response
🔇 Mute button → Disable voice response instantly
Voice uses system Text-to-Speech (macOS supported)


##🧪 Current Version
v1.0
Stable local AI assistant
Offline support
Voice output
Clean dev workflow
🚧 Next Version (In Development)
Planned features for upcoming versions:
🧠 Conversation memory
🎙 Voice input (talk to the AI)
🤖 Improved AI personality
📦 Packaged .dmg / .exe installers
🎨 UI polish and animations
⚙️ Auto-detection / bundling of Ollama


###📝 Notes
Ollama must remain installed on the system for AI responses.
This project is intended for learning, experimentation, and extension.
Architecture is modular and easy to upgrade.

📜 License
This project is currently for educational and personal use.
License can be added later if needed.
🙌 Acknowledgements
Ollama for local LLM runtime
Meta for LLaMA models
Electron & FastAPI communities

