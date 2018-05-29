import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'
import DetailPage from '../components/DetailPage/DetailPage'

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
      title
    }
    pilots {
      id
      name
    }
  }
}
`
const starshipDetailQuery = gql(query)

const StarshipDetail = ({ starship }) => (
  <DetailPage
    entity={starship}
    fields={[
      'MGLT',
      'cargo_capacity',
      'consumables',
      'cost_in_credits',
      'crew',
      'hyperdrive_rating',
      'length',
      'manufacturer',
      'max_atmosphering_speed',
      'model',
      'passengers',
      'starship_class',
    ]}
    relations={[{ name: 'films', title: 'title', url: '/film' }, { name: 'pilots', title: 'name', url: '/person' }]}
    title="name"
  />
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
