import { getRepository } from 'typeorm'
import { Specie } from '../entity'

export const queries = {
  specie: async (_, { id }) => getRepository(Specie).findOneById(id),
  species: async () => getRepository(Specie).find(),
}

export const fields = {
  people: (specie, params, {loaders}) => loaders.personLoaderBySpecieIds.load(specie.id),
  homeworld: (specie, params, {loaders}) => loaders.planetLoader.load(specie.planetId),
  films: (specie, params, {loaders}) => loaders.filmLoaderBySpecieIds.load(specie.id),
}