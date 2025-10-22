/**
 * @jest-environment jsdom
 */
import { sendMessage } from './app.js';

document.body.innerHTML = `
  <ul id="chatUsers"></ul>
  <div id="chatMessages"></div>
  <input id="messageInput" />
  <button id="sendBtn"></button>
`;

test('envía un mensaje y lo muestra en el chat', () => {
  const chatMessages = document.getElementById('chatMessages');
  const messageInput = document.getElementById('messageInput');
  const sendBtn = document.getElementById('sendBtn');

  messageInput.value = 'Hola bot!';

  // Simular clic
  sendBtn.onclick = sendMessage;
  sendBtn.click();

  // Verificar que el mensaje del usuario aparece en el DOM
  const userMessages = chatMessages.querySelectorAll('.message.user');
  expect(userMessages.length).toBe(1);
  expect(userMessages[0].textContent).toBe('Hola bot!');
});
