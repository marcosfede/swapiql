import { Fragment } from 'react'

export default ({ content }) => (
  <Fragment>
    <div className="title flex justify-start ma2" >
      {content}
    </div>
    <style jsx>
      {`
        .title {
          cursor: pointer;
          font-size: 25px;
          font-weight: 300;
          margin-left: 60px;
          transition: all 250ms ease-in-out;
        }

        .title:hover {
          color: var(--primary-color);
          text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4), 2px 2px 3px rgba(0, 0, 0, 0.3), 2px 1px 5px rgba(0, 0, 0, 0.2);
        }
      `}
    </style>
  </Fragment>
)
