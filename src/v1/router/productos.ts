import { Router } from "express";
import {
  GetProductos,
  GetProducto,
  CrearProducto,
  ActualizarProducto,
  BorrarProducto,
} from "../../controllers/productos";
import { logMiddleware } from "../../middleware/log";
import { validarJwt } from "../../middleware/seccionJwt";

const router = Router();

router.get("/", logMiddleware, validarJwt, GetProductos);

router.get("/get-Producto/:id", GetProducto);

router.post("/crear-Producto", CrearProducto);

router.put("/actualizar-Producto/:id", ActualizarProducto);

router.delete("/borrar-Producto/:id", BorrarProducto);

export default router;
