import { getRepository } from 'typeorm'
import { Film } from '../entity'

export const queries = {
  film: async (_, { id }) => getRepository(Film).findOneById(id),
  films: async (_, {limit}) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Film).find(opts)
  }
}

export const fields = {
  characters: (film, params, {loaders}) => loaders.personLoaderByFilmIds.load(film.id),
  starships: (film, params, {loaders}) => loaders.starshipLoaderByFilmIds.load(film.id),
  planets: (film, params, {loaders}) => loaders.planetLoaderByFilmIds.load(film.id),
  species: (film, params, {loaders}) => loaders.specieLoaderByFilmIds.load(film.id),
  vehicles: (film, params, {loaders}) => loaders.vehicleLoaderByFilmIds.load(film.id),
}
