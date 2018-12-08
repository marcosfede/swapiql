import css from 'styled-jsx/css'

export default css`
  .button {
    line-height: 1.5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid var(--main-fg-color);
    white-space: nowrap;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    height: 28px;
    user-select: none;
    text-transform: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: var(--main-fg-color);
    background-color: var(--main-bg-color);
  }

  .button.primary {
    color: var(--main-bg-color);
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .button.dashed {
    border-style: dashed;
  }

  .button {
    width: 7rem;
  }

  @media only screen and (min-width: 500px){
    .button {
      width: 8rem
    }
  }
`
