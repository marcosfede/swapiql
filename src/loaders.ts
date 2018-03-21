import * as Dataloader from 'dataloader'
import { getRepository } from 'typeorm'
import { groupBy } from 'ramda'
import { Film, Planet, Person, Specie, Starship, Vehicle } from './entity'

// example: many people to one homeworld (planet) would be manyToOneLoader(Planet)
const manyToOneLoader = (entity) => new Dataloader(ids => getRepository(entity).findByIds(ids))

// example one planet to many residents would be oneToMany(Person, 'person', 'homeworldId')
const oneToManyLoader = (entity, tableName, relationIdName) => new Dataloader(async ids => {
  const entities = await getRepository(entity)
  .createQueryBuilder(tableName)
  .where(`${tableName}.${relationIdName} IN (:ids)`, { ids })
  .getMany()
  const byIds = groupBy(row => row[relationIdName], entities)
  return ids.map(id => byIds[id.toString()])
})


export const planetLoader = () => manyToOneLoader(Planet)
export const personLoaderByPlanetIds = () => oneToManyLoader(Person, 'person', 'homeworldId')

// export const filmLoader = () => new Dataloader(ids => getRepository(Film).findByIds(ids))
// export const personLoader = () => new Dataloader(ids => getRepository(Person).findByIds(ids))
// export const specieLoader = () => new Dataloader(ids => getRepository(Specie).findByIds(ids))
// export const starshipLoader = () => new Dataloader(ids => getRepository(Starship).findByIds(ids))
// export const vehicleLoader = () => new Dataloader(ids => getRepository(Vehicle).findByIds(ids))

export default () => ({
  planetLoader: planetLoader(),
  personLoaderByPlanetIds: personLoaderByPlanetIds(),
})
