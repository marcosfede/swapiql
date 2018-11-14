import gql from 'graphql-tag'

import withData from '../lib/withData'
import Query from '../components/Query'
import QueryPage from '../components/QueryPage'
import DetailPage from '../components/DetailPage/DetailPage'

const query = `query vehicle($id: ID!) {
  vehicle(id: $id) {
    id
    cargo_capacity
    consumables
    cost_in_credits
    crew
    length
    manufacturer
    max_atmosphering_speed
    model
    name
    passengers
    pilots {
      id
      name
    }
    films {
      id
      title
    }
    vehicle_class
  }
}
`
const vehicleDetailQuery = gql(query)

const VehicleDetail = ({ vehicle }) => (
  <DetailPage
    entity={vehicle}
    fields={[
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
      'vehicle_class',
    ]}
    relations={[{ name: 'films', title: 'title', url: '/film' }, { name: 'pilots', title: 'name', url: '/person' }]}
    title="name"
  />
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={vehicleDetailQuery} variables={{ id: url.query.id }}>
        {({ data }) => {
          return <VehicleDetail vehicle={data.vehicle} />
        }}
      </Query>
    </QueryPage>
  )
})
