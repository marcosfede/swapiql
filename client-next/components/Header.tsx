import Link from 'next/link'

export default () => (
  <div className="w100 h2 flex justify-center">
      <Link prefetch href='/people'><a className="ph4 pv2">People</a></Link>
      <Link prefetch href='/planets'><a className="ph4 pv2">Planets</a></Link>
      <Link prefetch href='/films'><a className="ph4 pv2">Films</a></Link>
      <Link prefetch href='/starships'><a className="ph4 pv2">Starships</a></Link>
      <Link prefetch href='/species'><a className="ph4 pv2">Species</a></Link>
      <Link prefetch href='/vehicles'><a className="ph4 pv2">Vehicles</a></Link>
  </div>
)
