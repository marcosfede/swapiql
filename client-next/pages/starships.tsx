import gql from 'graphql-tag'
import Query from '../components/Query'
import QueryPage from '../components/QueryPage'
import StarshipList from '../components/Starships/StarshipList'
import withData from '../lib/withData'

const query = `query allStarships {
  starships {
    id
    name
  }
}
`

const starshipsQuery = gql(query)
export default withData(() => (
  <QueryPage query={query}>
    <Query query={starshipsQuery}>{({ data }) => <StarshipList starships={data.starships} />}</Query>
  </QueryPage>
))
