import { Request, Response } from "express";
import Archivo from "../models/ArchivoModel";

export const getArchivo = async (req: Request, res: Response) => {
    const {id} = req.params;
    const archivos = await Archivo.findByPk(id);
    if(archivos){
        res.status(200).json(archivos);
    }else{
        res.status(404).json({
            msg:`Ese archivo no existe ${id}`
        });
    }
}
