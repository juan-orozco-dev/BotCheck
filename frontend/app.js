

if (typeof document !== 'undefined') {
  const chatUsers = document.getElementById('chatUsers');
  const chatMessages = document.getElementById('chatMessages');
  const messageInput = document.getElementById('messageInput');
  const sendBtn = document.getElementById('sendBtn');

  // usuarios 
  const users = [
    { id: 1, name: 'Usuario 123', status: 'Activo' },
    { id: 2, name: 'Usuario 145', status: 'Espera' }
  ];

  if (chatUsers) {
    users.forEach((u) => {
      const li = document.createElement('li');
      li.textContent = `${u.name} (${u.status})`;
      li.onclick = () => openChat(u.id, u.name);
      chatUsers.appendChild(li);
    });
  }

  function openChat(id, name) {
    if (!chatMessages) return;
    chatMessages.innerHTML = '';
    const msg = document.createElement('div');
    msg.classList.add('message', 'bot');
    msg.textContent = `Hola ${name}, soy tu bot. ¿Cómo puedo ayudarte?`;
    chatMessages.appendChild(msg);
  }

  if (sendBtn) {
    sendBtn.onclick = sendMessage;
  }
}

export function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const chatMessages = document.getElementById('chatMessages');
  if (!messageInput || !chatMessages) return;

  const text = messageInput.value.trim();
  if (!text) return;

  const msg = document.createElement('div');
  msg.classList.add('message', 'user');
  msg.textContent = text;
  chatMessages.appendChild(msg);
  messageInput.value = '';

  setTimeout(() => {
    const reply = document.createElement('div');
    reply.classList.add('message', 'bot');
    reply.textContent = 'Entendido, procesando tu mensaje...';
    chatMessages.appendChild(reply);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}
