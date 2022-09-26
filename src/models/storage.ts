import { model, Schema } from "mongoose";
import { Storage } from "../interfaces/storage";

const SchemaStorage = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },

    path: {
      type: String,
    },

    idUsuario: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const storageModel = model("storage", SchemaStorage);
