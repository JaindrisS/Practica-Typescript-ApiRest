import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
// import { Storage } from "../interfaces/storage";
// import { registrarSubida } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getStorage = async (req: RequestExt, res: Response) => {
  try {
    const file = req.files;
    // const { usuario } = req;
    console.log(file);

    // const datos: Storage = {
    //   fileName: `${file?.name}`,
    //   idUsuario: usuario?.id,
    //   path: `${file?.tempFilePath}`,
    // };
    // console.log(datos);

    // const response = await registrarSubida();
    res.json("Aqui upload subida");
  } catch (error) {
    handleHttp(res, "Error al subir archivo", error);
  }
};

export { getStorage };
