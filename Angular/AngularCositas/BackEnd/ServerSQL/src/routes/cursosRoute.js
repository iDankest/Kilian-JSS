const express = require('express');
const router = express.Router();
const cursosController = require('../Controllers/cursoController');

//Rutas
router.post('/', cursosController.crearCurso)
router.get('/', cursosController.obtenerCursos)
router.put('/:id', cursosController.actualizarCurso)
router.get('/:id', cursosController.obtenerCurso)
router.delete('/:id', cursosController.eliminarCurso)

module.exports = router