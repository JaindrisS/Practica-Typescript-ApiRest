import { Router } from "express";
import { getStorage } from "../../controllers/upload";
import { validarJwt } from "../../middleware/seccionJwt";
// import multerMiddleware from "../../middleware/file";

const router = Router();

router.post("/", validarJwt, getStorage);

export default router;
