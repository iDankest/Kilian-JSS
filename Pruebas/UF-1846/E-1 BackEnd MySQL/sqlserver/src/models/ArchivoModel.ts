import { DataTypes } from "sequelize"; 
import db from "../config/connectdb";

const Archivo = db.define("archivo", {
    iduser:{
        type: DataTypes.INTEGER,
    },
    filename: {
        type: DataTypes.STRING,
    },
    filepath: {
        type: DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Archivo;