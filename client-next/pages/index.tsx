import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '../components/Button'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

export default () => (
  <Layout>
      <div className="pa4 order-1 flex w-50-l flex-column justify-center items-start-l items-center">
        <img className="darth-vader" src="/static/darth_vader_PNG29.png" />
      </div>
      <div className="pa4-ns flex order-0 order-1-l flex-column w-50-l justify-center items-start-l items-center">
        <h1 className="text-primary f1">Choose your side</h1>
        <div className="flex flex-row mv3">
          <Link prefetch href="/people">
            <a>
              <Button dashed className="w4 mr3">
                Explore
              </Button>
            </a>
          </Link>
            <a target="_blank" href={API_URL + 'playground/'}>
              <Button primary className="w4">
                Playground
              </Button>
            </a>
        </div>
      </div>
    <style jsx>{`
      h1 {
        font-weight: 300;
        margin-top: 0;
      }
      .darth-vader {
        border-radius: 0 0 50%;
        max-width: 100%;
        opacity: 0.25;
      }
    `}</style>
  </Layout>
)
