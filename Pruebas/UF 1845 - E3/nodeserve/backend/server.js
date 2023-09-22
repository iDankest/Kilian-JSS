const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/cursos', require('../backend/routes/cursos'));
app.use('/api/registro', require('../backend/routes/registro'));

app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente')
})