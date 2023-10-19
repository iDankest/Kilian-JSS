"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectdb_1 = __importDefault(require("../config/connectdb"));
const Usuario = connectdb_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    Fnacimiento: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    },
    pass: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    anotacion: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Usuario;
