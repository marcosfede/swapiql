import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import globalStyles from '../../styles/global.styles'
import Header from '../Header'
import layoutStyles from './styles'
import 'tachyons'


Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children }) => (
  <div className="root mw9 ph3 ph5-l flex flex-column">
    <Head>
      <title>SWAPI-QL</title>
    </Head>
    <Header />
    <div className="flex flex-column flex-row-l flex-auto">{children}</div>

    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{layoutStyles}</style>
  </div>
)
