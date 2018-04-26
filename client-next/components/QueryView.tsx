import { Query } from 'react-apollo'

export default props => {
  const { children, ...rest } = props
  return (
    <Query {...rest}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        return props.children(data)
      }}
    </Query>
  )
}
