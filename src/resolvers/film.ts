import { Film } from "../entity";
import { getRepository } from "typeorm";

export const queries = {
  film: async (_, { id }) => getRepository(Film).findOneById(id),
  films: async () => getRepository(Film).find(),
}

export const fields = {
  
}