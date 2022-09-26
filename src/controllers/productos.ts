import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertarProducto,
  obtenerProductos,
  obtenerUnProducto,
  actualizarProducto,
  borrarProducto,
} from "../services/productos";
import {RequestExt}from "../interfaces/req-ext"

const CrearProducto = async (_req: Request, res: Response) => {
  try {
    const body = _req.body;

    const response = await insertarProducto(body);

    await response.save();

    res.json({ msg: response });
  } catch (error) {
    handleHttp(res, "Error al crear los producto", error);
  }
};



const GetProductos = async (_req: RequestExt, res: Response) => {
  try {
    const response = await obtenerProductos();
    const user = _req.usuario;
    console.log(typeof user);

    res.json(response);
  } catch (error) {
    handleHttp(res, "Error al obtener los productos", error);
  }
};

const GetProducto = async (_req: Request, _res: Response) => {
  try {
    const { id } = _req.params;
    console.log(id);

    const response = await obtenerUnProducto(id);
    _res.json({ msg: "GetProducto", response });
  } catch (error) {
    handleHttp(_res, "Error al obtener el producto", error);
  }
};

const ActualizarProducto = async (_req: Request, _res: Response) => {
  try {
    const { id } = _req.params;
    const body = _req.body;

    const response = await actualizarProducto(id, body);

    _res.json({ msg: "Producto Actualizado", response });
  } catch (error) {
    handleHttp(_res, "Error al actualizar el producto", error);
  }
};

const BorrarProducto = async (_req: Request, _res: Response) => {
  try {
    const { id } = _req.params;

    const response = await borrarProducto(id);

    _res.json({ msg: "Producto borrado con exito", response });
  } catch (error) {
    handleHttp(_res, "Error al borrar el producto", error);
  }
};

export {
  GetProductos,
  GetProducto,
  ActualizarProducto,
  BorrarProducto,
  CrearProducto,
};
