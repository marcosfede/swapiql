import gql from 'graphql-tag'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import QueryView from '../components/QueryView';

const starshipDetailQuery = gql`
  query starship($id: ID!) {
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
const StarshipDetail = ({starship}) => (
  <div className="starship">
    <div>{starship.MGLT}</div>
  </div>
)
export default withData(({ url }) => {
  return (
    <Layout>
      <QueryView query={starshipDetailQuery} variables={{ id: url.query.id }}>
        {StarshipDetail}
      </QueryView>
    </Layout>
  )
})
