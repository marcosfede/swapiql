import Link from 'next/link'

interface Props {
  starships: {
    id: number
    name: string
  }[]
  changeHandler?: (text: string) => void
}
export default ({ starships }: Props) => (
  <div className="flex flex-column w-100">
    <input className="search-box" placeholder="Search" />
    {starships.map(starship => (
      <Link href={`/starship?id=${starship.id}`} key={starship.id}>
        <div className="title flex justify-start ma2" key={starship.id}>
          {starship.name}
        </div>
      </Link>
    ))}
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
        .title {
          cursor: pointer;
          font-size: 25px;
          font-weight: 100;
          margin-left: 60px;
          transition: all 250ms ease-in-out;
        }

        .title:hover {
          color: var(--primary-color);
          text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4), 2px 2px 3px rgba(0, 0, 0, 0.3), 2px 1px 5px rgba(0, 0, 0, 0.2);
        }
      `}
    </style>
  </div>
)
