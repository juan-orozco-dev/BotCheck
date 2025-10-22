export function sendMessage() {
  const input = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');
  const messageText = input.value.trim();
 
  if (!messageText) return;
 
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'user');
  messageElement.textContent = messageText;
 
  chatMessages.appendChild(messageElement);
  input.value = '';
}
