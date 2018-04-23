import Header from './Header'
import Head from 'next/head'

export default ({ children }) => (
  <div className="root">
    <Head>
      <title>GraphQL-SWAPI</title>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
    </Head>
    <Header />
    <div className="flex flex-column items-center mt4">{children}</div>
  </div>
)
