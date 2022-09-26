import Express, { Application } from "express";
import cors from "cors";
import authRouter from "../v1/router/auth";
import productoRouter from "../v1/router/productos";
import cargaRouter from "../v1/router/subida";
import { dbConnect } from "../config/db/mongo";
import fileUpload from "express-fileupload";

export default class Server {
  private app: Application;
  private port: string;
  private path = {
    auth: "/api/v1/auth",
    productos: "/api/v1/productos",
    usuarios: "/api/v1/usuarios",
    carga: "/api/v1/cargas",
  };
  constructor() {
    this.app = Express();
    this.port = process.env.PORT || "8080";
    this.middleware();
    this.router();
    this.connectionDB();
  }

  async connectionDB() {
    await dbConnect();
  }

  middleware() {
    this.app.use(Express.json());
    this.app.use(cors());

    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  router() {
    this.app.use(this.path.auth, authRouter);
    this.app.use(this.path.productos, productoRouter);
    this.app.use(this.path.carga, cargaRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}
