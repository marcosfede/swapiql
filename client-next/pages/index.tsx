import Layout from '../components/Layout'
import globalStyles from '../styles/global.styles'
import Link from 'next/link'

export default () => (
  <Layout>
    <div className="flex flex-row h-100 w-100">
      <div className="w-50"></div>
      <div className="w-50 flex flex-column justify-center items-center">
        <div className="salmon f1 helvetica">Choose your side</div>
        <div className="flex flex-row mv3">
          <Link prefetch href="/"><div className="b--grey ba f3 pa1 mh3 w4 flex justify-center gray br2">Explore</div></Link>
          <Link href='/playground'><div className="b--salmon ba black f3 pa1 mh3 w4 flex justify-center bg--salmon br2">Playground</div></Link>
        </div>
      </div>
    </div>

    <style global jsx>{globalStyles}</style>
  </Layout>
)
