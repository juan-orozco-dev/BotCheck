const db = require('../config/db');

const Usuario = {
  registrar: async (from) => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE telegram_id = ?', [from.id]);
    if (rows.length === 0) {
      await db.query('INSERT INTO usuarios (telegram_id, nombre, username) VALUES (?, ?, ?)', [
        from.id,
        from.first_name,
        from.username || '',
      ]);
    }
  },

  obtenerTodos: async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  },
};

module.exports = Usuario;
