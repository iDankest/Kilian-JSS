const express = require('express');
const router = express.Router();
const tareasController = require('../Controllers/tareaController');

//Rutas
router.post('/', tareasController.crearTarea)
router.get('/', tareasController.obtenerTareas)
router.put('/:id', tareasController.actualizarTarea)
router.get('/:id', tareasController.obtenerTarea)
router.delete('/:id', tareasController.eliminartTarea)

module.exports = router