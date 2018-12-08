import css from 'styled-jsx/css'

export default css.global`
  .detail-page {
    width: 100%;
  }
  .detail-page .title {
    font-size: 40px;
    margin-bottom: 5px;
  }
  .detail-page .field {
    display: flex;
    flex-direction: row;
    font-weight: 300;
    font-size: 18px;
    color: #B3B3B3;
  }
  .detail-page .right {
    padding-left: 15px;
    width: 69%;
    min-height: 25px;
    text-transform: capitalize;
  }
  .detail-page .left {
    width: 40%;
    min-height: 25px;
    display:flex ;
    justify-content: flex-end;
    text-transform: capitalize;
  }
  .detail-page .relation {
    height: 25px;
    color: #D95468;
    cursor: pointer;
  }
  .detail-page .relation:first-child {
    margin-top: 0;
  }
  .detail-page .field-name, .detail-page .field-value, .detail-page .relation {
    margin: 5px 0;
  }

  .detail-page * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`