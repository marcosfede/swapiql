import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'
import Layout from '../components/Layout'

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

export default withData(({ url }) => {
  return (
    <Layout>
      <Query query={starshipDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          const starship = data.starship
          return (
            <div className="starship">
              <div className="title b">{starship.name}</div>
              <div className="flex flex-row">
                <div>MGLT</div>
                <div>{starship.MGLT}</div>
              </div>
              <div className="flex flex-row">
                <div>cargo_capacity</div>
                <div>{starship.cargo_capacity}</div>
              </div>
              <div className="flex flex-row">
                <div>consumables</div>
                <div>{starship.consumables}</div>
              </div>
              <div className="flex flex-row">
                <div>cost_in_credits</div>
                <div>{starship.cost_in_credits}</div>
              </div>
              <div className="flex flex-row">
                <div>crew</div>
                <div>{starship.crew}</div>
              </div>
              <div className="flex flex-row">
                <div>hyperdrive_rating</div>
                <div>{starship.hyperdrive_rating}</div>
              </div>
              <div className="flex flex-row">
                <div>length</div>
                <div>{starship.length}</div>
              </div>
              <div className="flex flex-row">
                <div>manufacturer</div>
                <div>{starship.manufacturer}</div>
              </div>
              <div className="flex flex-row">
                <div>max_atmosphering_speed</div>
                <div>{starship.max_atmosphering_speed}</div>
              </div>
              <div className="flex flex-row">
                <div>name</div>
                <div>{starship.name}</div>
              </div>
              <div className="flex flex-row">
                <div>passengers</div>
                <div>{starship.passengers}</div>
              </div>
              <div className="flex flex-row">
                <div>starship_class</div>
                <div>{starship.starship_class}</div>
              </div>
            </div>
          )
        }}
      </Query>
    </Layout>
  )
})
