import { AxiosError } from "axios";
import api from "../utils/Api";
import { Pokemon } from "../types/Pokemon";

export const pokemonBattle = async (
  pokemon1Id: string,
  pokemon2Id: string
): Promise<Pokemon> => {
  try {
    const response = await api.get<Pokemon>("/battle", {
      params: {
        pokemon1Id,
        pokemon2Id,
      },
    });
    return response.data;
  } catch (err) {
    console.log((err as AxiosError).response?.data);
    throw err;
  }
};
