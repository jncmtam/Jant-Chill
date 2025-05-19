// frontend/src/index.js

async function chatWithAI(text) {
  const response = await fetch('http://localhost:8000/chat/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  console.log('AI Response:', data.response);
  return data.response;
}

// Example usage
chatWithAI("Hello, virtual character!").then(console.log);
