import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'
import DetailPage from '../components/DetailPage/DetailPage'

// TODO: species throw error here

const query = `query planet($id: ID!) {
  planet(id: $id) {
    id
    climate
    diameter
    gravity
    name
    orbital_period
    population
    rotation_period
    surface_water
    terrain
    films {
      id
      title
    }
    residents {
      id
      name
    }
  }
}
`
const planetDetailQuery = gql(query)

const PlanetDetail = ({ planet }) => (
  <DetailPage
    entity={planet}
    fields={[
      'climate',
      'diameter',
      'gravity',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
      'terrain',
    ]}
    relations={[{ name: 'films', title: 'title', url: '/film' }, { name: 'residents', title: 'name', url: '/person' }]}
    title="name"
  />
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={planetDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return 'Error'
          return <PlanetDetail planet={data.planet} />
        }}
      </Query>
    </QueryPage>
  )
})
