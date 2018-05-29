import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'
import DetailPage from '../components/DetailPage/DetailPage'

const query = `query specie($id: ID!) {
  specie(id: $id) {
    id
    average_height
    average_lifespan
    classification
    designation
    eye_colors
    hair_colors
    language
    name
    skin_colors
    homeworld {
      id
      name
    }
    people {
      id
      name
    }
    films {
      id
      title
    }
  }
}
`
const specieDetailQuery = gql(query)

const SpecieDetail = ({ specie }) => (
  <DetailPage
    entity={specie}
    fields={[
      'average_height',
      'average_lifespan',
      'classification',
      'designation',
      'eye_colors',
      'hair_colors',
      'language',
      'skin_colors',
    ]}
    relations={[
      { name: 'films', title: 'title', url: '/film' },
      { name: 'people', title: 'name', url: '/person' },
      { name: 'homeworld', title: 'name', url: '/planet' },
    ]}
    title="name"
  />
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
