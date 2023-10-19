"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectdb_1 = __importDefault(require("../config/connectdb"));
const StorageModel = connectdb_1.default.define('storage', {
    fileName: {
        type: sequelize_1.DataTypes.STRING,
    },
    idUser: {
        type: sequelize_1.DataTypes.STRING,
    },
    path: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = StorageModel;
