import { Request, Response } from "express";
import { AccesoUsuario, registrarNuevoUsuario } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const RegistrarUsuario = async (_req: Request, res: Response) => {
  try {
    const body = _req.body;
    const resposeUsuario = await registrarNuevoUsuario(body);
    return res.json({ msg: "Usuario Registrado", resposeUsuario });
  } catch (error) {
    return handleHttp(res, "Error al registar el usuario", error);
  }
};

const IniciarUsuario = async (req: Request, res: Response) => {
  const { correo, password } = req.body;

  const response = await AccesoUsuario({ correo, password });


  
  if (response === "Credenciales Incorrectas") {
    return res.status(403).json(response);
  }

  return res.json(response);
};

export { RegistrarUsuario, IniciarUsuario };
