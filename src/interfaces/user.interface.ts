import { Auth } from "./auth";


export interface  Usuario extends Auth {
  nombre: String;
  pais: String;
  estado: boolean;
}
