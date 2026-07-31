import type { HTMLAttributes, ReactNode } from 'react'
import styles from './container.module.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  const containerClassName = `${styles.container} ${className}`.trim()

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  )
}