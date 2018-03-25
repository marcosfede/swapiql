import { getRepository } from 'typeorm'
import { Vehicle } from '../entity'

export const queries = {
  vehicle: async (_, { id }) => getRepository(Vehicle).findOneById(id),
  vehicles: async (_, {limit}) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Vehicle).find(opts)
  }
}

export const fields = {
  films: (vehicle, params, {loaders}) => loaders.filmLoaderBySpecieIds.load(vehicle.id),
  pilots: (vehicle, params, {loaders}) => loaders.personLoaderByVehicleIds.load(vehicle.id),
}