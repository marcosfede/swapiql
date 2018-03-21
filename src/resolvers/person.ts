import { getRepository } from "typeorm";
import { Person } from "../entity";

export const queries = {
  person: async (_, { id }) => getRepository(Person).findOneById(id),
  people: async () => getRepository(Person).find(),
}

export const fields = {
  homeworld: (person, params, {loaders}) => person.homeworldId ? loaders.planetLoader.load(person.homeworldId): null,
  specie: (person, params, {loaders}) => person.specieId ? loaders.specieLoader.load(person.specieId) : null
}