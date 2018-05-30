import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'
import DetailPage from '../components/DetailPage/DetailPage'

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
    homeworld {
      id
      name
    }
    films {
      id
      title
    }
    specie {
      id
      name
    }
    vehicles {
      id
      name
    }
    starships {
      id
      name
    }
  }
}
`
const personDetailQuery = gql(query)

const PersonDetail = ({ person }) => (
  <DetailPage
    entity={person}
    fields={['birth_year', 'eye_color', 'gender', 'hair_color', 'height', 'mass', 'skin_color']}
    relations={[
      { name: 'films', title: 'title', url: '/film' },
      { name: 'homeworld', title: 'name', url: '/planet' },
      { name: 'specie', title: 'name', url: '/specie' },
      { name: 'vehicles', title: 'name', url: '/vehicle' },
      { name: 'starships', title: 'name', url: '/starship' }
    ]}
    title="name"
  />
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={personDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return 'Error'
          return <PersonDetail person={data.person} />
        }}
      </Query>
    </QueryPage>
  )
})
