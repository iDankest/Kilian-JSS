import { DataTypes } from 'sequelize'
import sequelize from '../db/connection';

const Archivo = sequelize.define('archivos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fileName: {
      type: DataTypes.STRING
    },
    idUser: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  }
);

export default Archivo;