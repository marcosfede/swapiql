import { getRepository } from 'typeorm'
import { Starship } from '../entity'

export const queries = {
  starship: async (_, { id }) => getRepository(Starship).findOneById(id),
  starships: async (_, {limit}) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Starship).find(opts)
  }
}

export const fields = {
  films: (starship, params, {loaders}) => loaders.filmLoaderByStarshipIds.load(starship.id),
  pilots: (starship, params, {loaders}) => loaders.personLoaderByStarshipIds.load(starship.id),
}