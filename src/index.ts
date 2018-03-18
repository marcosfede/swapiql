import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { GraphQLServer } from 'graphql-yoga'
import * as compression from 'compression'
// import { ApolloEngine } from 'apollo-engine'

import { resolvers } from './resolvers'

createConnection()
  .then(async connection => {
    const server = new GraphQLServer({
      typeDefs: './src/schema.graphql',
      resolvers,
    })
    server.express.use(compression())
    
    server
      .start({ tracing: true, cacheControl: true })
      .then(() => console.log(`Server started`))
      .catch(e => console.error(e))
  })
  .catch(error => console.log(error))
