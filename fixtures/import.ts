import { omit, pick } from 'ramda'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Film, Person, Planet, Specie, Starship, Vehicle } from '../src/entity'
const fixtures = require('.')
let {
  films,
  people,
  vehicles,
  planets,
  species,
  starships,
  transport,
} = fixtures
starships = starships.map(starship => ({
  ...starship,
  fields: {
    ...starship.fields,
    ...transport.find(t => t.pk === starship.pk).fields,
  },
}))
vehicles = vehicles.map(vehicle => ({
  ...vehicle,
  fields: {
    ...vehicle.fields,
    ...transport.find(t => t.pk === vehicle.pk).fields,
  },
}))
const relations = [
  'starships',
  'vehicles',
  'planets',
  'characters',
  'species',
  'pilots',
  'homeworld',
]

function loaddata(entity, data, omits, connection) {
  return connection
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(data.map(d => ({ ...omit(omits, d.fields), id: d.pk })))
    .execute()
}
function loadRelation(entity, attribute, data, connection) {
  return Promise.all(
    data.map(d => {
      if (d.fields[attribute] instanceof Array) {
        return connection
          .createQueryBuilder()
          .relation(entity, attribute)
          .of(d.pk)
          .add(d.fields[attribute])
          .catch(console.error)
      } else {
        return connection
          .createQueryBuilder()
          .relation(entity, attribute)
          .of(d.pk)
          .set(d.fields[attribute])
          .catch(console.error)
      }
    }),
  )
}
createConnection()
  .then(async connection => {
    await Promise.all([
      loaddata(Film, films, relations, connection),
      loaddata(Person, people, relations, connection),
      loaddata(Specie, species, relations, connection),
      loaddata(Planet, planets, relations, connection),
      loaddata(Starship, starships, relations, connection),
      loaddata(Vehicle, vehicles, relations, connection),
    ])
    await Promise.all([
      loadRelation(Film, 'starships', films, connection),
      loadRelation(Film, 'characters', films, connection),
      loadRelation(Film, 'planets', films, connection),
      loadRelation(Film, 'species', films, connection),
      loadRelation(Film, 'vehicles', films, connection),
      loadRelation(Person, 'homeworld', people, connection),
      loadRelation(Starship, 'pilots', starships, connection),
      loadRelation(Specie, 'homeworld', species, connection),
      loadRelation(Specie, 'people', species, connection),
      loadRelation(Vehicle, 'pilots', vehicles, connection),
    ])
  })
  .catch(console.error)
