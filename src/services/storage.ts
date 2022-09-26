import { storageModel } from "../models/storage";
import { Storage } from "../interfaces/storage";

const registrarSubida = async ({ fileName, path, idUsuario }: Storage) => {



  const response = await storageModel.create({ fileName, path, idUsuario });
  return response;
};

export { registrarSubida };
