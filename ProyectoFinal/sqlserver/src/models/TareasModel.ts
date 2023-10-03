import {DataTypes} from 'sequelize';
import db from '../config/connectdb';

const Tareas = db.define('Tareas', {
    nombre: {
        type: DataTypes.STRING
    },
    descipcion: {
        type: DataTypes.STRING
    },
    puntuacion: {
        type: DataTypes.NUMBER
    },
    estado: {
        type: DataTypes.STRING
    },
    importacia: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});
export default Tareas;