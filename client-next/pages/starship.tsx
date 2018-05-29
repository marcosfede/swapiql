import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

const query = `query starship($id: ID!) {
  starship(id: $id) {
    id
    MGLT
    cargo_capacity
    consumables
    cost_in_credits
    crew
    hyperdrive_rating
    length
    manufacturer
    max_atmosphering_speed
    model
    name
    passengers
    starship_class
    films {
      id
    }
    pilots {
      id
    }
  }
}
`
const starshipDetailQuery = gql(query)

const StarshipDetail = ({ starship }) => (
  <div className="starship">
    <div>{starship.MGLT}</div>
  </div>
)
export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={starshipDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <StarshipDetail starship={data.starship} />
        }}
      </Query>
    </QueryPage>
  )
})
