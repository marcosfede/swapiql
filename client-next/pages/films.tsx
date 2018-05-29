import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../components/QueryPage'
import List from '../components/EntityList/EntityList'
import Item from '../components/EntityList/EntityItem'
import SearchBox from '../components/SearchBox'
import withData from '../lib/withData'

const query = `query allFilms {
  films {
    id
    title
  }
}
`
const filmsQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={filmsQuery}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return 'Error'
        return (
          <Fragment>
            <SearchBox />
            <List>
              {data.films.map(film => (
                <Link prefetch href={`/film?id=${film.id}`} key={film.id}>
                  <a>
                    <Item content={film.title} />
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
