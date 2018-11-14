import { Query } from 'react-apollo'

export default ({ children, query, ...rest }) => {
  return (
    <Query query={query} {...rest}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return <p>Error :(</p>
        return children({data})
      }}
    </Query>
  )
}
