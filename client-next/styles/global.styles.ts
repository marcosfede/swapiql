import css from 'styled-jsx/css'

export default css.global`
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
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--primary-color);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--primary-color), 0 0 5px var(--primary-color);
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: var(--primary-color);
    border-left-color: var(--primary-color);
    border-radius: 50%;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
