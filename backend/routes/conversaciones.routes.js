const express = require('express');
const router = express.Router();
const controller = require('../controllers/conversaciones.controller');

router.get('/', controller.obtenerConversaciones);

module.exports = router;
