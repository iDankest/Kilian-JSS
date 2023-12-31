"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TareasController_1 = require("../controllers/TareasController");
const routerT = (0, express_1.Router)();
routerT.get('/tarea', TareasController_1.getTareas);
routerT.get('/tarea/:id', TareasController_1.getTarea);
routerT.delete('/tarea/:id', TareasController_1.deleteTarea);
routerT.post('/tarea', TareasController_1.postTarea);
routerT.put('/tarea/:id', TareasController_1.updateTarea);
exports.default = routerT;
