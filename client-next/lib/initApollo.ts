import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!(process as any).browser) {
  ;(global as any).fetch = fetch
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: (process as any).browser,
    ssrMode: !(process as any).browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: API_URL, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!(process as any).browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
