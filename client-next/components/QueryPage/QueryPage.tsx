import Layout from '../Layout'
import Code from './Code'

export default ({ query, children }) => (
  <Layout>
    <div className="result-container flex w-50-l flex-column justify-start items-center">{children}</div>
    <div className="pa4-ns flex flex-column w-50-l justify-start items-center">
      <Code query={query} />
    </div>
    <style jsx scoped>{`
      .result-container {
        margin-bottom: 20px;
      }
      @media only screen and (min-width: 500px){
        .result-container {
          padding: 32px;
        }
      }

    `}</style>
  </Layout>
)
