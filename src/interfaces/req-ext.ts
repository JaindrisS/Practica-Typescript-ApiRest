import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
export interface RequestExt extends Request {
  usuario?: JwtPayload | { id: string };
}
