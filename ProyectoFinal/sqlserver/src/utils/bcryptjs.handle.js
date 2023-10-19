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
exports.verificar = exports.encriptar = void 0;
const bcryptjs_1 = require("bcryptjs");
const encriptar = (pass) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordHash = yield (0, bcryptjs_1.hash)(pass, 8);
    return passwordHash;
});
exports.encriptar = encriptar;
const verificar = (pass, passHash) => __awaiter(void 0, void 0, void 0, function* () {
    const esCorrecto = yield (0, bcryptjs_1.compare)(pass, passHash);
    return esCorrecto;
});
exports.verificar = verificar;
