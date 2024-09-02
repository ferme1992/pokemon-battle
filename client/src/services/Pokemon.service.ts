import { AxiosError } from "axios";
import api from "../utils/Api";
import { Pokemon } from "../types/Pokemon";

// List of all the Pokemons
export const findAll = async (): Promise<Pokemon[]> => {
  try {
    const response = await api.get<Pokemon[]>("/pokemons");
    return response.data;
  } catch (err) {
    console.log((err as AxiosError).response?.data);
    throw err;
  }
};
