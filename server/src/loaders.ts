import * as Dataloader from 'dataloader'
import { groupBy } from 'ramda'
import { getRepository } from 'typeorm'
import { Film, Person, Planet, Specie, Starship, Vehicle } from './entity'
import { DefaultDict } from './utils'

// example: many people to one homeworld (planet) would be manyToOneLoader(Planet)
const manyToOneLoader = entity => new Dataloader(ids => getRepository(entity).findByIds(ids))

// TODO: could compose loaders and use a base entity loader without the where and groupby filters
// inside specific reverse foreign key loaders but it would potentially take a lot of memory...

// example one planet to many residents would be oneToMany(Person, 'person', 'homeworldId')
const oneToManyLoader = (entity, tableName, relationIdName) =>
  new Dataloader(async ids => {
    const entities = await getRepository(entity)
      .createQueryBuilder(tableName)
      .where(`${tableName}.${relationIdName} IN (:ids)`, { ids })
      .getMany()
    const byIds = groupBy(row => row[relationIdName], entities)
    return ids.map(id => byIds[id.toString()])
  })

const manyToManyLoader = (loadingEntity, tableName, relationName) =>
  new Dataloader(async ids => {
    const entities = await getRepository(loadingEntity)
      .createQueryBuilder(tableName)
      .select(tableName)
      .addSelect(`${relationName}.id`)
      .innerJoin(`${tableName}.${relationName}`, relationName)
      .getMany()

    const byIds = new DefaultDict()
    for (const entity of entities) {
      for (const related of await entity[relationName]) {
        byIds.add(related.id, entity)
      }
    }
    return ids.map(id => byIds.get(id))
  })

// * to 1 planet
export const planetLoader = () => manyToOneLoader(Planet)
// * to 1 specie
export const specieLoader = () => manyToOneLoader(Specie)
// person to planet
export const personLoaderByPlanetIds = () => oneToManyLoader(Person, 'person', 'homeworldId')
// person to specie
export const personLoaderBySpecieIds = () => oneToManyLoader(Person, 'person', 'specieId')
// specie to planet
export const specieLoaderByPlanetIds = () => oneToManyLoader(Specie, 'specie', 'homeworldId')
// film to person
export const filmLoaderByCharacterIds = () => manyToManyLoader(Film, 'film', 'characters')
export const personLoaderByFilmIds = () => manyToManyLoader(Person, 'person', 'films')
// film to starship
export const starshipLoaderByFilmIds = () => manyToManyLoader(Starship, 'starship', 'films')
export const filmLoaderByStarshipIds = () => manyToManyLoader(Film, 'film', 'starships')
// film to planet
export const planetLoaderByFilmIds = () => manyToManyLoader(Planet, 'planet', 'films')
export const filmLoaderByPlanetIds = () => manyToManyLoader(Film, 'film', 'planets')
// film to species
export const specieLoaderByFilmIds = () => manyToManyLoader(Specie, 'specie', 'films')
export const filmLoaderBySpecieIds = () => manyToManyLoader(Film, 'film', 'species')
// film to vehicles
export const vehicleLoaderByFilmIds = () => manyToManyLoader(Vehicle, 'vehicle', 'films')
export const filmLoaderByVehicleIds = () => manyToManyLoader(Film, 'film', 'vehicles')
// person to starship
export const starshipLoaderByPersonIds = () => manyToManyLoader(Starship, 'starship', 'pilots')
export const personLoaderByStarshipIds = () => manyToManyLoader(Person, 'person', 'starships')
// person to vehicle
export const vehicleLoaderByPersonIds = () => manyToManyLoader(Vehicle, 'vehicle', 'pilots')
export const personLoaderByVehicleIds = () => manyToManyLoader(Person, 'person', 'vehicles')

export default () => ({
  planetLoader: planetLoader(),
  personLoaderByPlanetIds: personLoaderByPlanetIds(),
  specieLoader: specieLoader(),
  personLoaderBySpecieIds: personLoaderBySpecieIds(),
  specieLoaderByPlanetIds: specieLoaderByPlanetIds(),
  filmLoaderByCharacterIds: filmLoaderByCharacterIds(),
  personLoaderByFilmIds: personLoaderByFilmIds(),
  starshipLoaderByFilmIds: starshipLoaderByFilmIds(),
  filmLoaderByStarshipIds: filmLoaderByStarshipIds(),
  planetLoaderByFilmIds: planetLoaderByFilmIds(),
  filmLoaderByPlanetIds: filmLoaderByPlanetIds(),
  specieLoaderByFilmIds: specieLoaderByFilmIds(),
  filmLoaderBySpecieIds: filmLoaderBySpecieIds(),
  vehicleLoaderByFilmIds: vehicleLoaderByFilmIds(),
  filmLoaderByVehicleIds: filmLoaderByVehicleIds(),
  starshipLoaderByPersonIds: starshipLoaderByPersonIds(),
  personLoaderByStarshipIds: personLoaderByStarshipIds(),
  vehicleLoaderByPersonIds: vehicleLoaderByPersonIds(),
  personLoaderByVehicleIds: personLoaderByVehicleIds(),
})
