import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

const query = `query vehicle($id: ID!) {
  vehicle(id: $id) {
    id
    cargo_capacity
    consumables
    cost_in_credits
    created
    crew
    edited
    length
    manufacturer
    max_atmosphering_speed
    model
    name
    passengers
    pilots {
      id
    }
    films {
      id
    }
    vehicle_class
    }
}
`
const vehicleDetailQuery = gql(query)

const VehicleDetail = ({ vehicle }) => (
  <div className="vehicle">
    <div>{vehicle.id}</div>
  </div>
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={vehicleDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <VehicleDetail vehicle={data.vehicle} />
        }}
      </Query>
    </QueryPage>
  )
})
