import {zipObj} from 'ramda'
import * as Film from './film'
import * as Person from './person'
import * as Planet from './planet'
import * as Specie from './specie'
import * as Starship from './starship'
import * as Vehicle from './vehicle'

const entities = [Film, Person, Planet, Specie, Starship, Vehicle]
const names = ['Film', 'Person', 'Planet', 'Specie', 'Starship', 'Vehicle']
const queries = entities.map(e => e.queries)
const subscriptions = entities.map(e => e.subscriptions)
const fields = entities.map(e => e.fields)

export default {
  Query: Object.assign({}, ...queries),
  Subscription: Object.assign({}, ...subscriptions),
  ...zipObj(names, fields)
}
