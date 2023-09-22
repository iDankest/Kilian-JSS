// Rutas para registro
const express = require('express');
const router = express.Router();
const registroController = require('../controllers/cregistro');

// api/registro
router.post('/', registroController.crearRegistro);
router.get('/', registroController.obtenerRegistros);
// router.put('/:id', registroController.actualizarRegistro);
router.get('/:id', registroController.obtenerRegistro);
// router.delete('/:id', registroController.eliminarRegistro);

module.exports = router;