import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import withData from '../lib/withData'
import QueryPage from '../components/QueryPage'

const query = `query film($id: ID!) {
  film(id: $id) {
    id
    characters {
      id
    }
    director
    episode_id
    opening_crawl
    planets {
      id
    }
    producer
    release_date
    species {
      id
    }
    starships {
      id
    }
    title
    vehicles {
      id
    }
  }
}
`

const filmDetailQuery = gql(query)

const FilmDetail = ({ film }) => (
  <div className="film">
    <div>{film.id}</div>
  </div>
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={filmDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return 'Error'
          return <FilmDetail film={data.film} />
        }}
      </Query>
    </QueryPage>
  )
})
