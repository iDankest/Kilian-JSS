const express = require('express')

// const initDB = require('./config/dbase')

const app = express()

const port = 3700

app.listen(port, ()=>{
    console.log('La aplicacion esta en linea')
})
const userRouters = require('./routes/user')
const CursosRouters = require('./routes/cursos')

// app.get('/', (req, res)=>{
//     res.send({
//         data: 'Hola Mundo'
//     })
// })

app.use(userRouters)

app.use(CursosRouters)


// app.listen(port, ()=>{
//     console.log('En linea')
// })

// initDB()

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/Appweb', {
    useNewUrlParser: true,
})
.then(()=>{
    console.log("Conexion establecida...")
})
.catch(err => console.log(err))