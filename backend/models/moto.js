const db = require('../config/db');

const Moto = {
  buscarPorCilindraje: async (cilindraje) => {
    const [rows] = await db.query('SELECT * FROM motos WHERE cilindraje = ?', [cilindraje]);
    return rows;
  },

  obtenerTodas: async () => {
    const [rows] = await db.query('SELECT * FROM motos');
    return rows;
  },

  crear: async (data) => {
    const { marca, modelo, cilindraje, color, precio, imagen_url } = data;
    await db.query(
      'INSERT INTO motos (marca, modelo, cilindraje, color, precio, imagen_url) VALUES (?, ?, ?, ?, ?, ?)',
      [marca, modelo, cilindraje, color, precio, imagen_url]
    );
  },
};

module.exports = Moto;
