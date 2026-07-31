import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Endüstriyel yedek parça çözümleri
          </span>

          <h1>
            İş makineleri için
            <strong>güvenilir yedek parça çözümleri</strong>
          </h1>

          <p>
            Kaliteli ürün, geniş ürün seçeneği ve hızlı teslimat
            anlayışımızla iş makinelerinizin kesintisiz çalışmasına
            destek oluyoruz.
          </p>

          <ul className={styles.features}>
            <li>Geniş ürün yelpazesi</li>
            <li>Hızlı ve güvenli teslimat</li>
            <li>Satış öncesi teknik destek</li>
          </ul>

          <div className={styles.actions}>
            <a href="#urunler" className={styles.primaryButton}>
              Ürünleri İncele
            </a>

            <a
              href="https://wa.me/903221234567"
              className={styles.secondaryButton}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}