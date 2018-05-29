import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
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
    <Query query={starshipsQuery}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return 'Error'
        return (
          <Fragment>
          <SearchBox />
          <List>
            {data.starships.map(starship => (
              <Link prefetch href={`/starship?id=${starship.id}`} key={starship.id}>
                <a>
                  <Item content={starship.name} />
                </a>
              </Link>
            ))}
          </List>
          </Fragment>
        )
      }}
    </Query>
  </QueryPage>
))
