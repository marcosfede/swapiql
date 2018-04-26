import Header from './Header'
import Head from 'next/head'

export default ({ children }) => (
  <div className="root h-100">
    <Head>
      <title>GraphQL-SWAPI</title>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
    </Head>
    <Header />
    <div className="content">
      {children}
    </div>

    <style jsx>
    {`
      .root {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 40px auto;
      }
    `}
    </style>
  </div>
)
