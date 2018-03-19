import { getRepository } from "typeorm";
import { Starship } from "../entity";

export const queries = {
  starship: async (_, { id }) => getRepository(Starship).findOneById(id),
  starships: async () => getRepository(Starship).find(),
}

export const fields = {
  
}