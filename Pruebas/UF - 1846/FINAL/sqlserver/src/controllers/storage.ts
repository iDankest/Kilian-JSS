import { Request, Response } from "express";
import sequelize from "../config/connectdb";
import { RequestExt } from "../interfaces/req-ext";
import { Archivos } from "../interfaces/archivo.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";


const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Archivos = {
      filename: `${file?.filename}`,
      iduser: `${user?.id}`,
      filepath: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile }