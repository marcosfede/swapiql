import Layout from '../components/Layout'
import withData from '../lib/withData'
import StarshipList from '../components/Starships/StarshipList'
import gql from 'graphql-tag'
import Query from '../components/Query'

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
    <Query query={starshipsQuery}>{({ data }) => <StarshipList starships={data.starships} />}</Query>
  </Layout>
))
