import { Ponderado } from "models/Ponderado.interface";
import { WebApiInstance } from "./api";

export const fetchPonderado = async (): Promise<Ponderado[]> =>
  WebApiInstance.get("ponderado")
    .then((res) => res.data)
    .catch((err: any) => {
      throw err.response.data;
    });
