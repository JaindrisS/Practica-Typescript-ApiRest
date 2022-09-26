import { Router } from "express";

const router = Router();

router.get("/usuarios");

router.get("get-Usuario:id");


router.put("/actualizar-Usuario:id");

router.delete("borrar-Usuario:id");
export default router;
