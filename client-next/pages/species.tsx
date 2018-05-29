import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
import withData from '../lib/withData'

const query = `query allSpecies {
  species {
    id
    name
  }
}
`
const speciesQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={speciesQuery}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return 'Error'
        return (
          <Fragment>
            <SearchBox />
            <List>
              {data.species.map(specie => (
                <Link prefetch href={`/specie?id=${specie.id}`} key={specie.id}>
                  <a >
                    <Item content={specie.name} />
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
