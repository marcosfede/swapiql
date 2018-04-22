import Link from 'next/link'

export default ({ films }) => (
  <div className="flex flex-column p2 w5">
    {films.map(film => (
      <Link href={`/film?id=${film.id}`} key={film.id}>
      <div className="p2 flex justify-center ba b--dashed ma1" key={film.id}>
        <p>{film.title}</p>
      </div>
      </Link>
    ))}
  </div>
)
