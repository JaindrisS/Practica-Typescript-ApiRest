import { ProductoModel } from "../models/producto";
import { Producto } from "../interfaces/producto.interface";

const insertarProducto = async (producto: Producto) => {
  const responseProducto = await ProductoModel.create(producto);

  return responseProducto;
};

const obtenerProductos = async () => {
  const responseProductos = await ProductoModel.find({ estado: true });

  return responseProductos;
};

const obtenerUnProducto = async (id: string) => {
  const responseOneProducto = await ProductoModel.findOne({
    _id: id,
    estado: true,
  });

  return responseOneProducto;
};

const actualizarProducto = async (id: string, data: Producto) => {
  const responseProducto = await ProductoModel.findByIdAndUpdate(
    { _id: id },
    data,
    { returnDocument: "after" }
  );

  return responseProducto;
};

const borrarProducto = async (id: string) => {
  const responseProducto = await ProductoModel.findByIdAndUpdate(
    { _id: id },
    { estado: false },
    { returnDocument: "after" }
  );

  return responseProducto;
};

export {
  insertarProducto,
  obtenerProductos,
  obtenerUnProducto,
  actualizarProducto,
  borrarProducto,
};
