import gql from 'graphql-tag'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'
import Query from '../components/Query'
import DetailPage from '../components/DetailPage/DetailPage'

const query = `query film($id: ID!) {
  film(id: $id) {
    id
    title
    director
    episode_id
    opening_crawl
    producer
    release_date
    characters {
      id
      name
    }
    planets {
      id
      name
    }
    species {
      id
      name
    }
    starships {
      id
      name
    }
    vehicles {
      id
      name
    }
  }
}
`

const filmDetailQuery = gql(query)

const FilmDetail = ({ film }) => (
  <DetailPage
    entity={film}
    fields={['director', 'episode_id', 'opening_crawl', 'producer', 'release_date']}
    relations={[
      { name: 'characters', title: 'name', url: '/person' },
      { name: 'planets', title: 'name', url: '/planet' },
      { name: 'species', title: 'name', url: '/specie' },
      { name: 'starships', title: 'name', url: '/starship' },
      { name: 'vehicles', title: 'name', url: '/vehicle' },
    ]}
    title="title"
  />
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={filmDetailQuery} variables={{ id: url.query.id }}>
        {({ data }) => {
          return <FilmDetail film={data.film} />
        }}
      </Query>
    </QueryPage>
  )
})
