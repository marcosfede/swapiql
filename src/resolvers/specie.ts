import { getRepository } from "typeorm";
import { Specie } from "../entity";

export const queries = {
  species: async (_, { id }) => getRepository(Specie).findOneById(id),
  specie: async () => getRepository(Specie).find(),
}

export const fields = {
  
}