import { getRepository } from "typeorm";
import { Vehicle } from "../entity";

export const queries = {
  vehicle: async (_, { id }) => getRepository(Vehicle).findOneById(id),
  vehicles: async () => getRepository(Vehicle).find(),
}

export const fields = {
  
}