import gql from 'graphql-tag'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import QueryView from '../components/QueryView'

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

const FilmDetail = ({ film }) => (
  <div className="film">
    <div className="title b">{film.title}</div>
    <div>{film.director}</div>
    <div>{film.episode_id}</div>
    <div>{film.opening_crawl}</div>
    <div>{film.producer}</div>
    <div>{film.release_date}</div>
    <div>{film.characters.map(c => c.id)}</div>
    <div>{film.planets.map(c => c.id).join(', ')}</div>
    <div>{film.species.map(c => c.id).join(', ')}</div>
    <div>{film.starships.map(c => c.id).join(', ')}</div>
    <div>{film.vehicles.map(c => c.id).join(', ')}</div>
  </div>
)
export default withData(({ url }) => {
  return (
    <Layout>
      <QueryView query={filmDetailQuery} variables={{ id: url.query.id }}>
        {FilmDetail}
      </QueryView>
    </Layout>
  )
})
