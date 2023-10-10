import { Router } from "express";
import {getArchivo} from "../controllers/ArchivoController"

const routerA = Router();
routerA.get('/archivo/:id', getArchivo);
routerA.post('/archivo', getArchivo);
export default routerA;