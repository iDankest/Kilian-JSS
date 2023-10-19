"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectdb_1 = __importDefault(require("../config/connectdb"));
const Tareas = connectdb_1.default.define('Tareas', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descipcion: {
        type: sequelize_1.DataTypes.STRING
    },
    puntuacion: {
        type: sequelize_1.DataTypes.NUMBER
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    },
    importacia: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Tareas;
