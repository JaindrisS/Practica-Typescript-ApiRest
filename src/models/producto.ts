import { Schema, model } from "mongoose";
import { Producto } from "../interfaces/producto.interface";

const SchemaProducto = new Schema<Producto>(
  {
    nombre: {
      type: String,
      required: true,
    },

    precio: {
      type: Number,
      required: true,
    },

    fechaVen: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },

    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProductoModel = model("Producto", SchemaProducto);
