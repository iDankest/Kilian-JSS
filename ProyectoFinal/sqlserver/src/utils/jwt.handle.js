"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarToken = exports.generarToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const generarToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, { expiresIn: "1h" });
    return jwt;
};
exports.generarToken = generarToken;
const verificarToken = (jwt) => {
    const EsOk = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return EsOk;
};
exports.verificarToken = verificarToken;
