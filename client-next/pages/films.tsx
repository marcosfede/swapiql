import Layout from '../components/Layout'
import withData from '../lib/withData'
import FilmList from '../components/Films/FilmList'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const filmQuery = gql`
{
  films {
    id
    title
  }
}
`
export default withData(() => (
  <Layout>
    <Query
    query={filmQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <FilmList films={data.films}/>
    }}
  </Query>
  </Layout>
))
