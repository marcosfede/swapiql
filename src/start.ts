import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { GraphQLServer } from 'graphql-yoga'
import * as compression from 'compression'
// import { ApolloEngine } from 'apollo-engine'
import { importSchema } from 'graphql-import'

import resolvers from './resolvers'
import createLoaders from './loaders';
import { Film } from './entity';

createConnection()
  .then(async connection => {
    const server = new GraphQLServer({
      typeDefs: importSchema('./src/schema/schema.graphql'),
      resolvers,
      context: {
        loaders: createLoaders()
      }
    })
    server.express.use(compression())

    server
      .start({ tracing: true, cacheControl: true })
      .then(() => console.log(`Server started`))
      .catch(e => console.error(e))
  })
  .catch(error => console.log(error))
