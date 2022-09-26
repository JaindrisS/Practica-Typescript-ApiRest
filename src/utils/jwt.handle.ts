import { sign, verify } from "jsonwebtoken";

const singJwt = (id: any) => {
  const payload = { id };
  const secretKey = <string>process.env.JWT_SECRET_KEY;

  const jwt = sign(payload, secretKey);
  return jwt;
};

const verifyJwt = (jwt: string) => {
  const secretKey = <string>process.env.JWT_SECRET_KEY;

  const esValido = verify(jwt, secretKey);
  return esValido;
};

export { singJwt, verifyJwt };
