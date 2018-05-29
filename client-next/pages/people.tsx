import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
import withData from '../lib/withData'

const query = `query allPeople {
  people {
    id
    name
  }
}
`
const peopleQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={peopleQuery}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return 'Error'
        return (
          <Fragment>
            <SearchBox />
            <List>
              {data.people.map(person => (
                <Link prefetch href={`/person?id=${person.id}`} key={person.id}>
                  <a >
                    <Item content={person.name} />
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
