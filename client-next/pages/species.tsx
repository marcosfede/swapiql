import gql from 'graphql-tag'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
import Query from '../components/Query'
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
      {({ data }) => {
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
