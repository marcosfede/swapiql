import { getRepository } from 'typeorm'
import { Person } from '../entity'

export const queries = {
  person: async (_, { id }) => getRepository(Person).findOneById(id),
  people: async (_, { limit }) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Person).find(opts)
  },
}

export const fields = {
  homeworld: (person, params, { loaders }) => {
    if (!person.homeworldId) {
      return null
    }
    return loaders.planetLoader.load(person.homeworldId)
  },
  specie: (person, params, { loaders }) => (person.specieId ? loaders.specieLoader.load(person.specieId) : null),
  films: (person, params, { loaders }) => loaders.filmLoaderByCharacterIds.load(person.id),
  starships: (person, params, { loaders }) => loaders.starshipLoaderByPersonIds.load(person.id),
  vehicles: (person, params, { loaders }) => loaders.vehicleLoaderByPersonIds.load(person.id),
}
