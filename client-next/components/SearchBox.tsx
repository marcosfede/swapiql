import  { Fragment } from 'react'

export default () => (
  <Fragment >
    <input className="search-box w-100" placeholder="Search" />
    <style jsx>
      {`
        .search-box {
          padding: 16px 16px 16px 60px;
          background-color: #262626;
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          margin-bottom: 15px;
          font-family: inherit;
          font-weight: 300;
          font-size: 24px;
          line-height: 1.4em;
          outline: none;
          color: inherit;
          box-sizing: border-box;
          border: none;
        }
      `}
    </style>
  </Fragment>
)
