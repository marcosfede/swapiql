import * as compression from 'compression'
import * as RateLimit from 'express-rate-limit'
import * as depthLimit from 'graphql-depth-limit'
// import { ApolloEngine } from 'apollo-engine'
import { importSchema } from 'graphql-import'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import * as helmet from 'helmet'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import createLoaders from './loaders'
import resolvers from './resolvers'

const isProd = process.env.NODE_ENV === 'production'

createConnection()
  .then(async connection => {
    const pubsub = new PubSub()
    const server = new GraphQLServer({
      typeDefs: importSchema('./src/schema/schema.graphql'),
      resolvers,
      context: {
        loaders: createLoaders(),
        pubsub,
      },
    })
    server.express.use(helmet())
    server.express.use(compression())
    const limiter = new RateLimit({
      windowMs: 24 * 60 * 60 * 1000, // 24 hours
      max: 1000, // limit each IP to 1000 requests per windowMs
      delayMs: 0, // disable delaying - full speed until the max limit is reached
    })
    // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
    // server.express.enable('trust proxy')
    server.express.use(limiter)
    // Requests to /graphql redirect to /
    server.express.all('/graphql', (req, res) => res.redirect('/'))
    server
      .start({
        tracing: true,
        cacheControl: true,
        port: 4000,
        endpoint: isProd ? '/api/' : '/',
        playground: isProd ? '/api/playground/' : '/playground/',
        validationRules: [depthLimit(10)],
      })
      .then(() => console.log(`Server started`))
      .catch(console.error)
  })
  .catch(console.error)
