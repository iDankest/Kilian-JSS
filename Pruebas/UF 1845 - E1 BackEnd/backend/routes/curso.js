const express = require('express')
const CursController = require('../controllers/cCurso')
const router = express.Router()

router.post('/save-curs', CursController.saveCurs);
router.get('/curs/:id?', CursController.getCurs);
router.get('/curso', CursController.getCursos);
router.put('/curs/:id', CursController.updateCurs);
router.delete('/curs/:id', CursController.deleteCurs);


module.exports = router  