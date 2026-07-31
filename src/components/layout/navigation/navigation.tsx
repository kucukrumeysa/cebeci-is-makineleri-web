import { navigationItems } from '../../../data/navigation'
import styles from './navigation.module.css'

export function Navigation() {
  return (
    <nav
      className={styles.navigation}
      aria-label="Ana navigasyon"
    >
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}