import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
import withData from '../lib/withData'

const query = `query allPlanets {
  planets {
    id
    name
  }
}
`
const planetsQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={planetsQuery}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading'
        if (error) return 'Error'
        return (
          <Fragment>
            <SearchBox />
            <List>
              {data.planets.map(planet => (
                <Link href={`/planet?id=${planet.id}`} key={planet.id}>
                  <Item content={planet.name} />
                </Link>
              ))}
            </List>
          </Fragment>
        )
      }}
    </Query>
  </QueryPage>
))
