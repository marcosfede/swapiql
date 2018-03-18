import 'reflect-metadata'
import { createConnection } from 'typeorm'
import {films, people, vehicles, planets, species, starships, transport} from '../fixtures'
import {Film, Person, Specie, Starship, Planet, Vehicle} from './entity'
import {omit} from 'ramda'

function loaddata(entity, data, omits, connection){
  (data as any).forEach(async d => {
    const entitydata = omit(omits, d.fields)
    const _entity = await connection.manager.create(entity, {...entitydata, id: d.pk})
    await connection.manager.save(_entity)
  })
}

createConnection()
  .then(async connection => {
    loaddata(Film, films, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
    loaddata(Person, people, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
    loaddata(Specie, species, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
    loaddata(Starship, starships, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
    loaddata(Planet, planets, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
    loaddata(Vehicle, vehicles, ['starships', 'vehicles', 'planets', 'characters', 'species', 'homeland', 'pilots'], connection)
  })
  .catch(error => console.log(error))
