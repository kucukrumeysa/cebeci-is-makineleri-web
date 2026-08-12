import { useEffect, useState } from 'react'
import { MobileMenu } from '../mobileMenu/mobileMenu'
import { Navigation } from '../navigation/navigation'
import styles from './header.module.css'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <div className={styles.topBarLeft}>
              <a href="tel:+903224281122">
                <span aria-hidden="true">☎</span>
                0 (322) 428 11 22
              </a>
              <a href="tel:+905322326452">
                <span aria-hidden="true">📱</span>
                0 (532) 232 64 52 (Ahmet C.)
              </a>

              <a href="mailto:info@cebeciismakineleri.com">
                <span aria-hidden="true">✉</span>
                info@cebeciismakineleri.com
              </a>
            </div>

            <div className={styles.workingHours}>
              Pazartesi – Cumartesi: 08.30 – 18.00
            </div>
          </div>
        </div>

        <div className={styles.mainHeader}>
          <div className={styles.mainHeaderContainer}>
            <a
              href="/"
              className={styles.logo}
              aria-label="Cebeci İş Makineleri ana sayfa"
            >
              <img
                src="/images/company/cebeci-logo.png"
                alt="Cebeci İş Makineleri"
              />
            </a>

            <div className={styles.desktopNavigation}>
              <Navigation />
            </div>

            <div className={styles.headerActions}>
              <a
                 href="/iletisim#teklif-formu"
                 className={styles.quoteButton}
              >
                Teklif Al
              </a>

              <button
                type="button"
                className={styles.menuButton}
                aria-label="Mobil menüyü aç"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.searchBar}>
          <div className={styles.searchBarContainer}>
            <form
              className={styles.searchForm}
              onSubmit={(event) => event.preventDefault()}
            >
              <label
                htmlFor="header-product-search"
                className={styles.srOnly}
              >
                Ürün veya yedek parça ara
              </label>

              <input
                id="header-product-search"
                type="search"
                placeholder="Ürün, marka veya yedek parça ara..."
              />

              <button type="submit">
                Ara
              </button>
            </form>

            <div className={styles.quickContact}>
              <span>Hızlı destek hattı</span>

              <a href="tel:+903224281122">
                0 (322) 428 11 22
              </a>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}