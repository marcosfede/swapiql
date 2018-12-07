import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'


const GA_TRACKING_ID = 'UA-129772604-1'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
          <link rel="stylesheet" href="/static/prism.css" />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />
          <script src="/static/prism.js" async />
          <link href="https://fonts.googleapis.com/css?family=Fira+Mono|Lato:300" rel="stylesheet" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
              ga('create', '${GA_TRACKING_ID}', 'auto');
              ga('send', 'pageview');
              `,
            }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
