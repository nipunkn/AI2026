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
