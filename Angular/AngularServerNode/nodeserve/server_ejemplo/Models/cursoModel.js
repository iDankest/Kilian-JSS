const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// CREATE TABLE appprueba.cursos (
//     idcursos INT NOT NULL AUTO_INCREMENT,
//     nombre VARCHAR(45) NULL,
//     descripcion VARCHAR(45) NULL,
//     categoria VARCHAR(45) NULL,
//     duracion VARCHAR(45) NULL,
//     temas VARCHAR(45) NULL,
//     imagen VARCHAR(45) NULL,
//     id_user_alu VARCHAR(45) NULL,
//     id_user_pro VARCHAR(45) NULL,
//     fecha registro VARCHAR(45) NULL,
//     fecha de inicio VARCHAR(45) NULL,
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
