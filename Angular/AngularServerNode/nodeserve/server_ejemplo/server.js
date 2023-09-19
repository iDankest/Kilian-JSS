//Buscar librerias necesarias para el servidor, que usaremos
//npm i express -save, npm i mongoose, npm i  -D nodemon, npm i dotenv --save, npm i cors -save

//Constantes para llamar a las librerias que hemos instalado

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const conectarDB = require('./db');

//Crear archivo variable.env su archivo donde pondremos la direcion de mongo base de datos
//Configuramos el archivo Db.js

const app = express();
conectarDB();
//Agregamos el middleware de express
app.use(cors());
app.use(express.json());

//Rutas
// app.use('/api/usuarios', require('./routes/usuarios'));

//Puerto
app.listen(3700), () => console.log('Servidor corriendo en puerto 3700');

//Package.json Cambiamos el Start y el main a nuestros archivos