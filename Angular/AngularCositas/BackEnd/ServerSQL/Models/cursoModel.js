const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CursoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    temas: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    id_user_alu: {
        type: String,
        required: true
    },
    id_user_pro: {
        type: String,
        required: true
        },
    fecha_registro: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: String,
        required: true
        }
    })

    module.exports = mongoose.model('Curso', CursoSchema)
