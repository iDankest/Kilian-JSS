import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const GCurso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // imagen: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temas: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
});
export default GCurso;