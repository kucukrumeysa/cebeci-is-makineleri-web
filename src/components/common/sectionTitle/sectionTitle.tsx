import styles from './sectionTitle.module.css'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  alignment?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  alignment = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={`${styles.sectionTitle} ${styles[alignment]}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  )
}