import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

// TODO: species throw error here

const query = `query planet($id: ID!) {
  planet(id: $id) {
    id
    climate
    created
    diameter
    edited
    gravity
    name
    orbital_period
    population
    rotation_period
    surface_water
    terrain
    films {
      id
    }
    residents {
      id
    }
  }
}
`
const planetDetailQuery = gql(query)

const PlanetDetail = ({ planet }) => (
  <div className="planet">
    <div>{planet.id}</div>
  </div>
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={planetDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <PlanetDetail planet={data.planet} />
        }}
      </Query>
    </QueryPage>
  )
})
