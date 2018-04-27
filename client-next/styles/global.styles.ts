import css from 'styled-jsx/css'

export default css`
  :root {
    --main-bg-color: #1a1a1a;
    --main-fg-color: #b3b3b3;
    --primary-color: #d95468;
    --secondary-color: #499bfc;
    --secondary-fg-color: #a0b3c6;
  }

  @font-face {
    font-family: 'starjedi';
    src: url('/static/Starjedi.ttf');
  }

  html,
  body {
    background-color: var(--main-bg-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  .text-primary {
    color: var(--primary-color);
  }

  .text-secondary {
    color: var(--secondary-color) !important;
  }

  .bg-primary {
    background-color: var(--primary-color);
    color: var(--main-bg-color);
  }

  .bg-secondary {
    background-color: var(--primary-color);
    color: var(--main-bg-color);
  }
`
