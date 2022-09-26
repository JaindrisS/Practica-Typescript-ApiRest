import { Router } from "express";
import { RegistrarUsuario,IniciarUsuario} from "../../controllers/auth";

const router = Router();

router.post("/registrar", RegistrarUsuario);

router.post("/iniciar",IniciarUsuario);

export default router;
