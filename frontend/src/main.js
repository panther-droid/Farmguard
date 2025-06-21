import initBackend from '../../../backend/index.js';

window.addEventListener("DOMContentLoaded", async () => {
  const backend = await initBackend();

  async function getAdvice() {
    const input = document.getElementById("userInput").value;
    const responseEl = document.getElementById("response");
    responseEl.innerText = "Analyzing symptoms... 🌿";

    try {
      const systemPrompt = {
        role: { system_: null },
        content:
          "You are FarmGuard, an AI assistant helping farmers diagnose and treat crop issues. Provide local, low-cost, and practical advice."
      };

      const userPrompt = {
        role: { user: null },
        content: input
      };

      const result = await backend.chat([systemPrompt, userPrompt]);
      responseEl.innerText = result;
    } catch (e) {
      responseEl.innerText = "⚠️ Error: " + e.message;
    }
  }

  document.getElementById("sendBtn").addEventListener("click", getAdvice);
  document.getElementById("userInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      getAdvice();
    }
  });
});
