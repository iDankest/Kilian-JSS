import { DataTypes } from 'sequelize'
import sequelize from '../config/connectdb';

const Archivo = sequelize.define('archivo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filename: {
      type: DataTypes.STRING
    },
    iduser: {
      type: DataTypes.STRING
    },
    filepath: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: true,
  }
);

export default Archivo;