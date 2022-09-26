import { hashSync, genSaltSync, compareSync } from "bcryptjs";

const encrypt = async (pass: string) => {
  const salt = await genSaltSync(10);

  const passwordHash = await hashSync(pass, salt);

  return passwordHash;
};

const verificar = async (password: string, passwordHash: string) => {
  const esCorrecta = await compareSync(password, passwordHash);
  return esCorrecta;
};

export { encrypt, verificar };
