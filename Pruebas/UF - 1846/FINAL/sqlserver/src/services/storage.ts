import { Archivos } from "../interfaces/archivo.interface";
import Archivo from "../models/ArchivoModel";

const registerUpload = async ({ filename, iduser, filepath }: Archivos) => {
  const responseItem = await Archivo.create({ filename, iduser, filepath });
  return responseItem;
};

export { registerUpload };
