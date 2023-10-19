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
exports.updateAdmin = exports.postAdmin = exports.deleteAdmin = exports.getAdmin = exports.getAdmins = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel"));
const getAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAdmins = yield AdminModel_1.default.findAll();
    res.json(listAdmins);
});
exports.getAdmins = getAdmins;
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const admin = yield AdminModel_1.default.findByPk(id);
    if (admin) {
        res.json(admin);
    }
    else {
        res.status(404).json({
            msg: `No existe un admin con ese ${id}`
        });
    }
});
exports.getAdmin = getAdmin;
const deleteAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const admin = yield AdminModel_1.default.findByPk(id);
    if (!admin) {
        res.status(404).json({
            msg: `No existe un admin con ese ${id}`
        });
    }
    else {
        yield admin.destroy();
        res.json({
            msg: 'El admin fue eliminado con exito'
        });
    }
});
exports.deleteAdmin = deleteAdmin;
const postAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield AdminModel_1.default.create(body);
        res.json({
            msg: '¡El admin fue agregado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.postAdmin = postAdmin;
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const admin = yield AdminModel_1.default.findByPk(id);
        if (admin) {
            yield admin.update(body);
            res.json({
                msg: 'El admin fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un admin con ese ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.updateAdmin = updateAdmin;
