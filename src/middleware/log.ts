import { Request, Response, NextFunction } from "express";

const logMiddleware = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("LogMiddleware");

  next();
};

export { logMiddleware };
