import * as compression from 'compression'
import * as RateLimit from 'express-rate-limit'
import * as depthLimit from 'graphql-depth-limit'
// import { ApolloEngine } from 'apollo-engine'
import {importSchema} from 'graphql-import'
import {GraphQLServer} from 'graphql-yoga'
import 'reflect-metadata'
import {createConnection} from 'typeorm'
import createLoaders from './loaders'
import resolvers from './resolvers'

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
    const limiter = new RateLimit({
      windowMs: 24 * 60 * 60 * 1000, // 24 hours
      max: 2000, // limit each IP to 2000 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
    // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
    // server.express.enable('trust proxy')
    server.express.use(limiter)
    server
      .start({
        tracing: true,
        cacheControl: true,
        port: 4000,
        validationRules: [depthLimit(10)]
      })
      .then(() => console.log(`Server started`))
      .then(() => console.log(' ****************************** '))
      .catch(e => console.error(e))
  })
  .catch(error => console.log(error))
