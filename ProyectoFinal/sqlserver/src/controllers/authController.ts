import { Request, Response } from "express";
import { registroNuevoUser, accesoUser } from "../services/authService";

const registroCtrl = async ({body}: Request, res:Response) => {//
    const responseUser = await registroNuevoUser(body);
    res.send(responseUser);
}

const accesoCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body;
const responseUser = await accesoUser({email, password});

if(responseUser === "Contraseña Incorrecta"){
    res.status(403)
    res.send(responseUser);
}else {
    res.send(responseUser);
}
}
export { registroCtrl, accesoCtrl };