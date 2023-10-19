import {DataTypes} from "sequelize";
import db from "../config/connectdb";


const StorageModel = db.define('storage',
  {
    fileName: {
      type: DataTypes.STRING,
    },
    idUser: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
  },

);

export default StorageModel;
