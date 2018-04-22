import Layout from '../components/Layout'
import withData from '../lib/withData'
import StarshipList from '../components/Starships/StarshipList'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const starshipsQuery = gql`
  {
    starships {
      id
      name
    }
  }
`
export default withData(() => (
  <Layout>
    <Query query={starshipsQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        return <StarshipList starships={data.starships}/>
      }}
    </Query>
  </Layout>
))
