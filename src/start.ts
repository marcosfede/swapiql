import * as compression from 'compression'
// import { ApolloEngine } from 'apollo-engine'
import {importSchema} from 'graphql-import'
import {GraphQLServer} from 'graphql-yoga'
import 'reflect-metadata'
import {createConnection, getRepository} from 'typeorm'

import {Film} from './entity'
import createLoaders from './loaders'
import resolvers from './resolvers'

class DefaultDict {
  private map: Map<number, any[]>
  constructor() {
    this.map = new Map()
  }
  public add(to, id) {
    let current = this.map.get(to)
    if (!current) {
      current = []
    }
    current.push(id)
    this.map.set(to, current)
  }

  public get(id) {
    return this.map.get(id)
  }

  public toString() {
    for (const key of this.map.keys()) {
      const valueIds = this.map.get(key).map(value => value.id)
      console.log(key, valueIds)
    }
  }
}

createConnection()
  .then(async connection => {
    const server = new GraphQLServer({
      typeDefs: importSchema('./src/schema/schema.graphql'),
      resolvers,
      context: {
        loaders: createLoaders(),
      },
    })
    server.express.use(compression())

    server
      .start({tracing: true, cacheControl: true})
      .then(() => console.log(`Server started`))
      .then(() => console.log(' ****************************** '))
      .catch(e => console.error(e))
  })
  .catch(error => console.log(error))
