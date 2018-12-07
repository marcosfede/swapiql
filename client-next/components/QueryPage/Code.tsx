import '../../static/prism'
import PrismCode from 'react-prism'

type Props = {
  query: string
}

export default ({ query }: Props) => (
  <div className="code">
    <div className="toolbar">
      <span />
      <span />
      <span />
    </div>
    <pre className="line-numbers language-graphql">
      <PrismCode component="code" className="line-numbers language-graphql">
        {query}
      </PrismCode>
    </pre>
    <style jsx>{`
      .code {
        width: 100%;
        background-color: #262626;
        border-radius: 4px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }
      .toolbar {
        display: flex;
        flex-direction: row;
        padding: 10px;
      }

      .toolbar > span {
        border-radius: 100%;
        background-color: var(--main-bg-color);
        width: 15px;
        height: 15px;
        display: flex;
        margin-right: 5px;
      }
      pre {
        background-color: #262626 !important;
        width: 100%;
        padding-top: 0;
        padding-bottom: 15px;
        margin: 0;
      }

      pre > :global(code) {
        font-family: "Fira Mono";
        font-size: 14px;
      }

      pre > :global(code) :global(.line-numbers-rows) {
        border-color: #8e8c8c;
        opacity: 0.31;
        line-height: 24px;
      }

      pre > :global(code) :global(.line-numbers-rows) > :global(span):before {
        color: #8e8c8c;
      }


    `}</style>
  </div>
)
