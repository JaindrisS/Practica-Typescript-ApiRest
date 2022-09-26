import { Schema, model } from "mongoose";
import { Usuario } from "../interfaces/user.interface";

const SchemaUsuario = new Schema<Usuario>(
  {
    nombre: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
    pais: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const UsuarioModel = model("Usuario", SchemaUsuario);
