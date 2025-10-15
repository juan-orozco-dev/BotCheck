const express = require('express');
const router = express.Router();
const controller = require('../controllers/motos.controller');

router.get('/', controller.obtenerMotos);
router.post('/', controller.crearMoto);

module.exports = router;
