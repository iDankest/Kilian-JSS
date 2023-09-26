const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareasSchema = new Schema({
    nombre: String,
    descripcion: String,
    puntuacion: Number,
    estado: String,
    importancia: String,
    id_curso: String,
    id_user_alu: String,
    est_entrega: String,
    fec_entrega: String
});
module.exports = mongoose.model('Tareas', TareasSchema);
