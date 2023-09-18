const mongoose = require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
        nameC: {
            type: String
        },
        timeC: {
            type: Number
        },
        imagenC: {
            type: String
        },
        docenteC:{
            type:String
        },
        descripC:{
            type: String
        }
    }
)
module.exports = mongoose.model('cursos', CursoSchema)