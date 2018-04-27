import Link from 'next/link'
import css from 'styled-jsx/css'
import Logo from './swapiql.svg'

export default () => (
  <header className="flex flex-column flex-row-l justify-between items-center">
    <Link prefetch href="/">
      <a className="brand flex items-center">
        <Logo />
        Swapiql
      </a>
    </Link>

    <nav className="mv2 flex flex-row flex-wrap justify-center">
      <Link prefetch href="/people">
        <a>People</a>
      </Link>
      <Link prefetch href="/planets">
        <a>Planets</a>
      </Link>
      <Link prefetch href="/films">
        <a>Films</a>
      </Link>
      <Link prefetch href="/starships">
        <a>Starships</a>
      </Link>
      <Link prefetch href="/species">
        <a>Species</a>
      </Link>
      <Link prefetch href="/vehicles">
        <a>Vehicles</a>
      </Link>
      <a className="text-secondary" href="https://github.com/matias-pierobon/swapiql" target="_blank">
        <i className="devicon-github-plain" />
      </a>
    </nav>
    <style jsx>{`
      header {
        padding: 15px 0;
      }
      .brand {
        font-family: 'starjedi';
        font-size: 20px;
        font-weight: 100;
      }
      .brand :global(svg) {
        height: 65px;
        display: flex;
        margin-right: 15px;
      }
      nav a {
        display: flex;
        padding: 0 10px;
        margin: .5rem 0;
        color: var(--secondary-fg-color);
        font-size: 18px;
      }
      nav a:last-child {
        margin-right: 0;
      }
    `}</style>
  </header>
)
