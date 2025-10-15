/*

const Usuario = require('../models/usuario');
const Moto = require('../models/moto');
const Conversacion = require('../models/conversacion');

module.exports = {
  start: async (ctx) => {
    await Usuario.registrar(ctx.from);
    ctx.reply('🚀 Bienvenido al Bot de Motos!\nEscribe el cilindraje (ej. 150cc) o el modelo.');
  },

  buscarPorCilindraje: async (ctx) => {
    const cilindraje = parseInt(ctx.match[1]);
    const motos = await Moto.buscarPorCilindraje(cilindraje);

    let respuesta = '';
    if (motos.length === 0) {
      respuesta = `😕 No encontré motos de ${cilindraje}cc.`;
      ctx.reply(respuesta);
    } else {
      respuesta = `🏍️ Encontré estas motos de ${cilindraje}cc:\n`;
      for (const moto of motos) {
        ctx.replyWithPhoto(moto.imagen_url, {
          caption: `${moto.marca} ${moto.modelo} - $${moto.precio}`,
        });
      }
    }

    await Conversacion.guardar(ctx.from.id, ctx.message.text, respuesta);
  },

  mensajeGenerico: async (ctx) => {
    const respuesta = "🤖 Lo siento, no entendí. Escribe un cilindraje como '150cc'.";
    ctx.reply(respuesta);
    await Conversacion.guardar(ctx.from.id, ctx.message.text, respuesta);
  },
};
*/

// bot/handlers.js
/*
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

