import express from 'express';
import dotenv from 'dotenv';
import bot from './bot/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Servidor y bot corriendo 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
