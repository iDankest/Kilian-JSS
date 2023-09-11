// const express = require('express')

// const controller = require('../controllers/cCursos')
// const router = express.Router()

// const path = 'cursos'

// router.get(`/${path}`, controller.getData)

// module.exports = router
const express = require('express')
const CursosController = require('../controllers/cCursos')
const router = express.Router()

router.get('/homec', CursosController.homec);
router.get('/test', CursosController.test);
router.post('/save-curso', CursosController.saveCurso);
router.get('/curso/:id?', CursosController.getCurso);
router.get('/cursos', CursosController.getCursos);
router.put('/curso/:id', CursosController.updateCurso);
router.delete('/curso/:id', CursosController.deleteCurso);


module.exports = router  