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
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesoCtrl = exports.registroCtrl = void 0;
const authService_1 = require("../services/authService");
const registroCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUser = yield (0, authService_1.registroNuevoUser)(body);
    res.send(responseUser);
});
exports.registroCtrl = registroCtrl;
const accesoCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    const responseUser = yield (0, authService_1.accesoUser)({ email, password });
    if (responseUser === "Contraseña Incorrecta") {
        res.status(403);
        res.send(responseUser);
    }
    else {
        res.send(responseUser);
    }
});
exports.accesoCtrl = accesoCtrl;
