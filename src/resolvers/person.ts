import { getRepository } from "typeorm";
import { Person } from "../entity";

export const queries = {
  person: async (_, { id }) => getRepository(Person).findOneById(id),
  people: async () => getRepository(Person).find(),
}

export const fields = {
  homeworld: async (person, params, {loaders}) => loaders.planetLoader.load(person.homeworldId)
}