const mongoose = require('mongoose')

const CursSchema = new mongoose.Schema(
    {
        codigo: {
            type: String
        },
        nombreU:{
            type: String
        },
        tarea:{
            type: Number
        },
        descripC:{
            type: String
        },
        puntaje: {
            type: Number
        },
        estado:{
            type: Boolean
        }
    }
)
module.exports = mongoose.model('curso', CursSchema)