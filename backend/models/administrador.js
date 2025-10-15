const db = require('../config/db');
const bcrypt = require('bcrypt');

const Administrador = {
  crear: async (nombre, email, password) => {
    const hash = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO administradores (nombre, email, password_hash) VALUES (?, ?, ?)', [
      nombre,
      email,
      hash,
    ]);
  },

  login: async (email, password) => {
    const [rows] = await db.query('SELECT * FROM administradores WHERE email = ?', [email]);
    if (rows.length === 0) return null;

    const admin = rows[0];
    const valid = await bcrypt.compare(password, admin.password_hash);
    return valid ? admin : null;
  },
};

module.exports = Administrador;
