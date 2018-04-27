import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import globalStyles from '../../styles/global.styles'
import Header from '../Header'
import layoutStyles from './styles'

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children }) => (
  <div className="root mw9 ph3 ph5-l flex flex-column">
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>SWAPI-QL</title>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" />
    </Head>
    <Header />
    <div className="flex flex-column flex-row-l flex-auto">{children}</div>

    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{layoutStyles}</style>
  </div>
)
