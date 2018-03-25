import { getRepository } from 'typeorm'
import { Specie } from '../entity'

export const queries = {
  specie: async (_, { id }) => getRepository(Specie).findOneById(id),
  species: async (_, {limit}) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Specie).find(opts)
  }
}

export const fields = {
  people: (specie, params, {loaders}) => loaders.personLoaderBySpecieIds.load(specie.id),
  homeworld: (specie, params, {loaders}) => specie.planetId ? loaders.planetLoader.load(specie.planetId) : null,
  films: (specie, params, {loaders}) => loaders.filmLoaderBySpecieIds.load(specie.id),
}