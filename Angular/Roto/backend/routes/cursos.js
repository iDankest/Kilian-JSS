const express = require('express')

const controller = require('../controllers/cCursos')
const router = express.Router()

const path = 'cursos'

router.get(`
/${path}
`, controller.getData)

module.exports = router