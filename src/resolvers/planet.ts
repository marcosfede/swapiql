import { getRepository } from 'typeorm'
import { Planet } from '../entity'

export const queries = {
  planet: async (_, { id }) => getRepository(Planet).findOneById(id),
  planets: async (_, { limit }) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Planet).find(opts)
  },
}

export const fields = {
  residents: async (planet, params, { loaders }) => loaders.personLoaderByPlanetIds.load(planet.id),
  species: async (planet, params, { loaders }) => loaders.specieLoaderByPlanetIds.load(planet.id),
  films: async (planet, params, { loaders }) => loaders.filmLoaderByPlanetIds.load(planet.id),
}


export const subscriptions = {
}