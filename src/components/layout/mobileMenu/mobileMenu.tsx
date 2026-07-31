import { navigationItems } from '../../../data/navigation'
import styles from './mobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      <button
        type="button"
        className={`${styles.overlay} ${
          isOpen ? styles.overlayVisible : ''
        }`}
        aria-label="Mobil menüyü kapat"
        onClick={onClose}
      />

      <aside
        className={`${styles.mobileMenu} ${
          isOpen ? styles.open : ''
        }`}
        aria-hidden={!isOpen}
      >
        <div className={styles.menuHeader}>
          <a
            href="/"
            className={styles.mobileLogo}
            onClick={onClose}
          >
            <img
              src="/images/company/logo.png"
              alt="Cebeci İş Makineleri"
            />
          </a>

          <button
            type="button"
            className={styles.closeButton}
            aria-label="Menüyü kapat"
            onClick={onClose}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          className={styles.mobileNavigation}
          aria-label="Mobil navigasyon"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                  <span aria-hidden="true">›</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactArea}>
          <span className={styles.contactLabel}>
            Bize ulaşın
          </span>

          <a
            href="tel:+903221234567"
            className={styles.phone}
          >
            +90 322 123 45 67
          </a>

          <a
            href="#teklif"
            className={styles.quoteButton}
            onClick={onClose}
          >
            Teklif Al
          </a>
        </div>
      </aside>
    </>
  )
}