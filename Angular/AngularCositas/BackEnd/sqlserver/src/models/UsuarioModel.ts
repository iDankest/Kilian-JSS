import { DataTypes } from "sequelize";
import db from '../config/connectdb';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    Telefono: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    Fnacimiento:{
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    anotacion: {
        type: DataTypes.STRING
    }, 
}, {
    createdAt: false,
    updatedAt: false
});
export default Usuario;