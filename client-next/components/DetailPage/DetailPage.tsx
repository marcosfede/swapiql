import Link from 'next/link'
import styles from './styles'

interface Props {
  entity: any
  fields: string[]
  relations: { title: string; name: string; url: string }[]
  title: string
}

function toDisplayName(name) {
  return name.split('_').join(' ')
}

const renderField = (entity, field) => (
  <div className="field" key={field}>
    <div className="flex justify-end field-name left">{toDisplayName(field) + ':'}</div>
    <div className="field-value right">{entity[field] ? entity[field] : 'Null'}</div>
  </div>
)

const renderManyRelation = (relationship, url, title) =>
  relationship.map(related => (
    <Link key={related.id} href={`${url}?id=${related.id}`}>
      <div className="relation">{related[title]}</div>
    </Link>
  ))

const renderOneRelation = (relationship, url, title) => (
  <Link key={relationship.id} href={`${url}?id=${relationship.id}`}>
    <div className="relation">{relationship[title]}</div>
  </Link>
)

const renderRelation = (entity, relation) => {
  const { name, title, url } = relation
  const relationship = entity[name]
  return (
    <div className="field" key={name}>
      <div className="field-name left">{toDisplayName(name) + ':'}</div>
      <div className="field-value right">
        {!relationship
          ? 'Null'
          : relationship instanceof Array
            ? renderManyRelation(relationship, url, title)
            : renderOneRelation(relationship, url, title)}
      </div>
    </div>
  )
}

export default ({ entity, fields, relations, title }: Props) => {
  return (
    <div className="detail-page">
      <div className="field">
        <div className="blank left" />
        <div className="right title">{entity[title]}</div>
      </div>

      {fields.map(field => renderField(entity, field))}

      {relations.map(relation => renderRelation(entity, relation))}

      <style global jsx>
        {styles}
      </style>
    </div>
  )
}
