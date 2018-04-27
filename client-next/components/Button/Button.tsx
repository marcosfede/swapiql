import styles from './styles'

const getClasses = (primary, dashed, className) =>
  ['button', className, primary && 'primary', dashed && 'dashed']
  .filter(className => className)
  .join(' ')

type PropTypes = {
  primary?: boolean
  dashed?: boolean
  children?: any
  className?: string
}

export default ({ primary, dashed, children, className }: PropTypes) => (
  <span className={getClasses(primary, dashed, className)}>
    {children}
    <style jsx>{styles}</style>
  </span>
)
