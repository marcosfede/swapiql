import { getRepository } from "typeorm";
import { Planet } from "../entity";

export const queries = {
  planet: async (_, { id }) => getRepository(Planet).findOneById(id),
  planets: async () => getRepository(Planet).find(),
}

export const fields = {
  
}