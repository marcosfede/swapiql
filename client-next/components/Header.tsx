import Link from 'next/link'

export default () => (
  <div className="w100 flex justify-center">
    <Link prefetch href="/people">
      <a className="ph4 pv2 no-underline grey">People</a>
    </Link>
    <Link prefetch href="/planets">
      <a className="ph4 pv2 no-underline grey">Planets</a>
    </Link>
    <Link prefetch href="/films">
      <a className="ph4 pv2 no-underline grey">Films</a>
    </Link>
    <Link prefetch href="/starships">
      <a className="ph4 pv2 no-underline grey">Starships</a>
    </Link>
    <Link prefetch href="/species">
      <a className="ph4 pv2 no-underline grey">Species</a>
    </Link>
    <Link prefetch href="/vehicles">
      <a className="ph4 pv2 no-underline grey">Vehicles</a>
    </Link>
  </div>
)
