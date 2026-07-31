import styles from './footer.module.css'

const footerLinks = [
  {
    id: 1,
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    id: 2,
    label: 'Kurumsal',
    href: '/kurumsal',
  },
  {
    id: 3,
    label: 'Hizmetlerimiz',
    href: '/hizmetlerimiz',
  },
  {
    id: 4,
    label: 'Ürün Grupları',
    href: '/urun-gruplari',
  },
  {
    id: 5,
    label: 'Markalar',
    href: '/markalar',
  },
  {
    id: 6,
    label: 'Katalog',
    href: '/katalog',
  }
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.companyColumn}>
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

            <p className={styles.description}>
              İş makineleri için motor, hidrolik, filtre ve yedek
              parça çözümleri sunuyoruz. Kaliteli ürün ve hızlı
              teslimat anlayışıyla hizmet veriyoruz.
            </p>

            <a
              href="/iletisim#teklif-formu"
              className={styles.quoteButton}
            >
              Teklif Al
            </a>
          </div>

          <div className={styles.linksColumn}>
            <h2>Hızlı Bağlantılar</h2>

            <nav aria-label="Footer navigasyonu">
              <ul>
                {footerLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>
                      <span aria-hidden="true">›</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.contactColumn}>
            <h2>İletişim</h2>

            <address className={styles.contactList}>
              <div className={styles.contactItem}>
                <span
                  className={styles.contactIcon}
                  aria-hidden="true"
                >
                  ●
                </span>

                <div>
                  <strong>Adres</strong>

                  <p>
                    Yeşiloba Mahallesi, Yeni Sanayi Sitesi
                    46117 Sokak, 5. Blok
                    <br />
                    Seyhan / Adana
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span
                  className={styles.contactIcon}
                  aria-hidden="true"
                >
                  ☎
                </span>

                <div>
                  <strong>Telefon</strong>

                  <a href="tel:+903224281122">
                    +90 322 428 11 22
                  </a>

                  <a href="tel:+903224287766">
                    +90 322 428 77 66
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span
                  className={styles.contactIcon}
                  aria-hidden="true"
                >
                  ✉
                </span>

                <div>
                  <strong>E-posta</strong>

                  <a href="mailto:info@cebecisismakineleri.com">
                    info@cebecisismakineleri.com
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>
            © {new Date().getFullYear()} Cebeci İş Makineleri.
            Tüm hakları saklıdır.
          </p>

          <a href="/iletisim">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  )
}