import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/usuario.interface";
import UserModel from "../models/userModel";
// import Usuario from "../models/UsuarioModel";
import { encriptar, verificar } from "../utils/bcryptjs.handle";
import { generarToken } from "../utils/jwt.handle";
// import { generarToken } from "../utils/jwt.handle";

const registroNuevoUser = async ({email, password, nombre}: User) => {
const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "Ya existe el usuario"
const passwordHash = await encriptar(password)
const registroNuevoUser = await UserModel.create
({email, password: passwordHash, nombre})
}

const accesoUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "No existe el usuario"

    const passwordHash = checkIs.password
    const esCorrecto = await verificar (password, passwordHash)

    if(!esCorrecto) return "La contraseña es incorrecta"
    
    const token = generarToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }
        return data
}

export {registroNuevoUser,accesoUser}