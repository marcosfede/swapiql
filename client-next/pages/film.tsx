import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'
import Layout from '../components/Layout'

const filmDetailQuery = gql`
  query film($id: ID!) {
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

export default withData(({ url }) => {
  return (
    <Layout>
      <Query query={filmDetailQuery} variables={{ id: url.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          const film = data.film
          return (
            <div className="film">
              <div className="title b">{film.title}</div>
            </div>
          )
        }}
      </Query>
    </Layout>
  )
})
