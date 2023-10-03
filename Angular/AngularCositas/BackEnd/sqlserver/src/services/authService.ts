import { Auth } from "../interfaces/auth.interface";
import { UserModel } from "../models/userModel"; 
import { User } from "../interfaces/usuario.interface";

import { encriptar, verificar } from "../utils/bcryptjs.handle";
import { generarToken } from "../utils/jwt.handle";

const registroNuevoUser = async ({email, password, nombre}: User) => {
    const checkIs =await UserModel.findOne({email});
    if(checkIs) return "El usuario ya existe";
    const passHash = await encriptar(password);
    const registroNuevoUser = await UserModel.create({email, passHash, nombre})
    return registroNuevoUser;
}
const accesoUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "El usuario no existe";

    const passwordHash = checkIs.password;
    const esCorrecto = await verificar(password, passwordHash);
    if(!esCorrecto) return "Contraseña Incorrecta";
    const token = generarToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }
    return data;

}

export{ registroNuevoUser, accesoUser}