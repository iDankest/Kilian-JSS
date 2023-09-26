const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    Fnacimiento:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now(),
    },
    telefono: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    }
})
// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);