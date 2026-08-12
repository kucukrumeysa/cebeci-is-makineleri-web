import { Link } from 'react-router-dom'
import styles from './aboutPreview.module.css'

export function AboutPreview() {
  return (
    <section className={styles.aboutPreview}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>40 Yılı Aşkın Tecrübe</span>
          <h2 className={styles.title}>İş Makineleri Yedek Parçasında Güvenin Adresi</h2>
          <p className={styles.description}>
            1984 yılından bugüne uzanan 40 yılı aşkın tecrübemizle, Adana Yeşiloba Mahallesi Metal Sanayi Sitesi'ndeki 
            kapsamlı tesisimizde hizmet veriyoruz. Yarım asra yaklaşan sektörel ustalığımızla CAT, Cummins, Komatsu ve Isuzu 
            gibi dünya devlerinin orijinal parçalarını en hızlı ve güvenilir şekilde tedarik etmeye devam ediyoruz.
          </p>
          <Link to="/hakkimizda" className={styles.button}>
            Kurumsal Hikayemiz
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>1984</span>
            <span className={styles.statLabel}>Sektöre Giriş</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Yıllık Tecrübe</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>7+</span>
            <span className={styles.statLabel}>Dünya Markası</span>
          </div>
        </div>
      </div>
    </section>
  )
}
