import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

const query = `query specie($id: ID!) {
  specie(id: $id) {
    id
    average_height
    average_lifespan
    classification
    created
    designation
    edited
    eye_colors
    hair_colors
    language
    name
    skin_colors
    homeworld {
      id
    }
    people {
      id
    }
    films {
      id
    }
  }
}
`
const specieDetailQuery = gql(query)

const SpecieDetail = ({ specie }) => (
  <div className="specie">
    <div>{specie.id}</div>
  </div>
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={specieDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <SpecieDetail specie={data.specie} />
        }}
      </Query>
    </QueryPage>
  )
})
