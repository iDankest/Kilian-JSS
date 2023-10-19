import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/usuario.interface";
import UserModel from "../models/userModel";
import { encriptar, verificar } from "../utils/bcryptjs.handle";
import { generarToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, nombre }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encriptar(password); //TODO 12345678
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    nombre,
  });
  //TODO 123456
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado!
  const isCorrect = await verificar(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generarToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
