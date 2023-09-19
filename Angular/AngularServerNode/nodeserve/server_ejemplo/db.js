const mongoose = require('mongoose')
require('dotenv').config({path: 'variable.env' })

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            // userNewUrlParser: true,
            // useUnifiedTopology: true
        })
        console.log('Conectado con el server')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = conectarDB