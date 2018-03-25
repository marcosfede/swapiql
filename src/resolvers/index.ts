import * as Film from './film'
import * as Person from './person'
import * as Planet from './planet'
import * as Specie from './specie'
import * as Starship from './starship'
import * as Vehicle from './vehicle'

export default {
  Query: {
    ...Film.queries,
    ...Person.queries,
    ...Planet.queries,
    ...Specie.queries,
    ...Starship.queries,
    ...Vehicle.queries,
  },
  Film: Film.fields,
  Person: Person.fields,
  Planet: Planet.fields,
  Specie: Specie.fields,
  Starship: Starship.fields,
  Vehicle: Vehicle.fields,
}
