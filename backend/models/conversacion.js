const db = require('../config/db');

const Conversacion = {
  guardar: async (telegramId, mensajeUsuario, respuestaBot) => {
    const [usuario] = await db.query('SELECT id FROM usuarios WHERE telegram_id = ?', [telegramId]);
    if (usuario.length > 0) {
      await db.query('INSERT INTO conversaciones (usuario_id, mensaje_usuario, respuesta_bot) VALUES (?, ?, ?)', [
        usuario[0].id,
        mensajeUsuario,
        respuestaBot,
      ]);
    }
  },

  obtenerTodas: async () => {
    const [rows] = await db.query(
      'SELECT c.*, u.nombre FROM conversaciones c JOIN usuarios u ON c.usuario_id = u.id ORDER BY fecha DESC'
    );
    return rows;
  },
};

module.exports = Conversacion;
