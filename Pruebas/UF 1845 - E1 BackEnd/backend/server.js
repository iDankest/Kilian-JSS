const express = require('express')


const app = express()

const port = 3700

app.listen(port, ()=>{
    console.log('La aplicacion esta en linea')
})
const userRouters = require('./routes/user')
const CursosRouters = require('./routes/cursos')
const CursRouters = require('./routes/curso')



app.use(userRouters)

app.use(CursosRouters)

app.use(CursRouters)



const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/Appweb', {
    useNewUrlParser: true,
})
.then(()=>{
    console.log("Conexion establecida...")
})
.catch(err => console.log(err))
// const initDB = require('./config/dbase')

// app.get('/', (req, res)=>{
//     res.send({
//         data: 'Hola Mundo'
//     })
// })


// app.listen(port, ()=>{
//     console.log('En linea')
// })

// initDB()