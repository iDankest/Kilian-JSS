"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesoUser = exports.registroNuevoUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
// import Usuario from "../models/UsuarioModel";
const bcryptjs_handle_1 = require("../utils/bcryptjs.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
// import { generarToken } from "../utils/jwt.handle";
const registroNuevoUser = ({ email, password, nombre }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield userModel_1.default.findOne({ email });
    if (checkIs)
        return "Ya existe el usuario";
    const passwordHash = yield (0, bcryptjs_handle_1.encriptar)(password);
    const registroNuevoUser = yield userModel_1.default.create({ email, password: passwordHash, nombre });
});
exports.registroNuevoUser = registroNuevoUser;
const accesoUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield userModel_1.default.findOne({ email });
    if (!checkIs)
        return "No existe el usuario";
    const passwordHash = checkIs.password;
    const esCorrecto = yield (0, bcryptjs_handle_1.verificar)(password, passwordHash);
    if (!esCorrecto)
        return "La contraseña es incorrecta";
    const token = (0, jwt_handle_1.generarToken)(checkIs.email);
    const data = {
        token,
        user: checkIs
    };
    return data;
});
exports.accesoUser = accesoUser;
