import 'reflect-metadata'
import { createConnection } from 'typeorm'
import {
  films,
  people,
  vehicles,
  planets,
  species,
  starships,
  transport,
} from '../fixtures'
import { Film, Person, Specie, Starship, Planet, Vehicle } from './entity'
import { omit, pick } from 'ramda'

function loaddata(entity, data, omits, connection) {
  return connection
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(data.map(d => ({ ...omit(omits, d.fields), id: d.pk })))
    .execute()
}
const relations = [
  'starships',
  'vehicles',
  'planets',
  'characters',
  'species',
  'pilots',
  'homeworld',
]
console.log((films as any).map(d => ({ ...pick(relations, d.fields)})))
// createConnection()
//   .then(async connection => {
    // await loaddata(Film, films, relations, connection)
    // await loaddata(Person, people, relations, connection)
    // await loaddata(Specie, species, relations, connection)
    // await loaddata(Planet, planets, relations, connection)
    // await loaddata(Starship, starships, relations, connection)
    // await loaddata(Vehicle, vehicles, relations, connection)
  // })
  // .catch(error => console.log(error))
