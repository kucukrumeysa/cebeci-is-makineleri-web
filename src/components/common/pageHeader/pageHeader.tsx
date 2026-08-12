import styles from './pageHeader.module.css'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  title: string
  breadcrumbs: Breadcrumb[]
}

export function PageHeader({ title, breadcrumbs }: Props) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.breadcrumb}>
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.href ? (
              <a href={crumb.href}>{crumb.label}</a>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className={styles.separator}>/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
