import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyJwt } from "../utils/jwt.handle";

const validarJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  // try {
  const jwtDeUsuario = req.headers.authorization || "";
  const jwt = jwtDeUsuario.split(" ").pop();

  const jwtValido = verifyJwt(`${jwt}`) as { id: string };

  if (!jwtValido) {
    res.status(401).json("Token Invalido");
  }

  req.usuario = jwtValido;

  next();
  // } catch (error) {
  // res.status(400).json("Seccion_No_Validad");
  // console.log(error);
  // }
};

export { validarJwt };
