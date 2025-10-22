import { motos, usuarios, conversaciones } from "../fakeDB.js";

export async function handleMessage(bot, msg) {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  // Buscar o registrar usuario en memoria
  let usuario = usuarios.find(u => u.telegram_id === chatId);
  if (!usuario) {
    usuario = {
      id: usuarios.length + 1,
      nombre: msg.from.first_name,
      telegram_id: chatId
    };
    usuarios.push(usuario);
  }

  // Guardar la conversación
  conversaciones.push({
    usuarioId: usuario.id,
    mensaje: text,
    fecha: new Date()
  });

  console.log("Usuarios:", usuarios);
  console.log("Conversaciones:", conversaciones);

  // Respuestas del bot
  if (text.includes("hola")) {
    return bot.sendMessage(
      chatId,
      `¡Hola ${usuario.nombre}! 🚀 Dime qué cilindraje de moto buscas (ej: 150cc)`
    );
  }

  // Detectar si el usuario escribió un número de cilindraje
  if (text.match(/\d{2,3}/)) {
    const cc = parseInt(text.match(/\d{2,3}/)[0]);
    const resultados = motos.filter(m => m.cilindraje === cc);

    if (resultados.length === 0) {
      return bot.sendMessage(chatId, `No encontré motos de ${cc}cc 😢`);
    }

    for (let moto of resultados) {
      await bot.sendPhoto(chatId, moto.imagen_url, {
        caption: `${moto.marca} ${moto.modelo} - ${moto.cilindraje}cc\nPrecio: $${moto.precio}`
      });
    }
    return;
  }

  // Respuesta por defecto
  return bot.sendMessage(
    chatId,
    "Lo siento, no entendí 🤖. Prueba diciendo un cilindraje (ej: 150cc)."
  );
}
*/

export async function handleMessage(bot, msg) {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  if (text.includes('hola')) {
    bot.sendMessage(chatId, '👋 Hola, soy Botcheck. Pregúntame por motos 🚀');
  } else if (text.includes('moto')) {
    bot.sendMessage(chatId, '🏍️ Te recomiendo una Yamaha MT-07, excelente cilindraje!');
  } else {
    bot.sendMessage(chatId, "❓ No entendí, prueba escribir 'moto' o 'hola'.");
  }
}

