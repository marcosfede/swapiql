import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

const query = `query person($id: ID!) {
  person(id: $id) {
    id
    birth_year
    eye_color
    gender
    hair_color
    height
    mass
    name
    skin_color
    edited
    homeworld {
      id
    }
    films {
      id
    }
    specie {
      id
    }
    vehicles {
      id
    }
    starships {
      id
    }
  }
}
`
const personDetailQuery = gql(query)

const PersonDetail = ({ person }) => (
  <div className="person">
    <div>{person.id}</div>
  </div>
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={personDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <PersonDetail person={data.person} />
        }}
      </Query>
    </QueryPage>
  )
})
