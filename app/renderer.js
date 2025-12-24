
let voiceEnabled = true;

function speak(text) {
  if (!voiceEnabled) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.3;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynthesis.cancel(); 
  speechSynthesis.speak(utterance);
}

async function sendToBackend(message) {
  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    return data.response;

  } catch (error) {
    console.error("Backend error:", error);
    return "Backend not reachable.";
  }
}

const terminal = document.getElementById("terminal");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");



async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addLine("user", "> " + text);
  input.value = "";
  input.disabled = true;

  const thinking = typeAI("Thinking...");

  try {
    const reply = await sendToBackend(text);
    thinking.remove();
    speak(reply);
    typeAI(reply);

  } catch (e) {
    thinking.remove();
    typeAI("Backend error.");
  }

  input.disabled = false;
  input.focus();
}






function addLine(type, text) {
  const div = document.createElement("div");
  div.className = "line " + type;
  div.textContent = text;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}


function typeAI(text) {
  let i = 0;
  const div = document.createElement("div");
  div.className = "line ai";
  terminal.appendChild(div);

  const typing = setInterval(() => {
    div.textContent += text.charAt(i);
    terminal.scrollTop = terminal.scrollHeight;
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 40);

  return div; 
}



sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
const voiceBtn = document.getElementById("voiceToggle");

voiceBtn.addEventListener("click", () => {
  voiceEnabled = !voiceEnabled;
  voiceBtn.textContent = voiceEnabled ? "🔊" : "🔇";
});




if (window.assistantAPI) {
  window.assistantAPI.receive("ai-response", (data) => {
    typeAI(data);
  });

  window.assistantAPI.receive("system", (msg) => {
    addLine("ai", "[SYSTEM] " + msg);
  });
}


setTimeout(() => {
  typeAI("System ready. Awaiting commands.");
}, 800);
