import { Auth } from "../interfaces/auth";
import { Usuario } from "../interfaces/user.interface";
import { UsuarioModel } from "../models/usuario";
import { encrypt, verificar } from "../utils/bcryptjs.handle";
import { singJwt } from "../utils/jwt.handle";

const registrarNuevoUsuario = async ({ correo, password, nombre }: Usuario) => {
  const usuarioExiste = await UsuarioModel.findOne({ correo: correo });

  if (usuarioExiste) {
    return "Ya Existe el Usuario";
  }

  const passwordHash = await encrypt(password);

  const response = UsuarioModel.create({
    password: passwordHash,
    correo,
    nombre,
  });

  return response;
};

const AccesoUsuario = async ({ correo, password }: Auth) => {
  const usuarioExiste = await UsuarioModel.findOne({ correo });

  if (!usuarioExiste) return "Credenciales Incorrectas";

  const passwordHash = usuarioExiste.password;

  const esCorrecto = await verificar(password, passwordHash);

  if (!esCorrecto) return "Credenciales Incorrectas";

  const jwt = singJwt(usuarioExiste._id);

  return { usuarioExiste, jwt };
};

export { registrarNuevoUsuario, AccesoUsuario };
