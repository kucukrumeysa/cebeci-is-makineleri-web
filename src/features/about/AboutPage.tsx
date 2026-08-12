import { PageHeader } from '../../components/common/pageHeader/pageHeader'
import { SEO } from '../../components/common/seo/SEO'
import styles from './aboutPage.module.css'

export function AboutPage() {
  const brands = [
    'Isuzu',
    'CAT',
    'Daewoo',
    'Komatsu',
    'Mitsubishi',
    'Perkins',
    'Yanmar'
  ]

  return (
    <div>
      <SEO 
        title="Kurumsal - Hakkımızda | Cebeci İş Makinaları" 
        description="1984 yılından bugüne 40 yıllık tecrübeyle Adana Seyhan'da iş makineleri yedek parça satışı, CAT, Cummins, Komatsu parça tedariki."
      />
      <PageHeader
        title="Hakkımızda"
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Hakkımızda' }]}
      />

      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <h2>40 Yılı Aşkın Tecrübe ile Güvenin Adresi</h2>
          <p>
            İş makineleri ve yedek parça sektöründeki yolculuğumuza <strong>1984 yılında</strong> adım attık. Yılların getirdiği derin bilgi birikimi ve 40 yılı aşkın köklü tecrübemizle harmanlanan bu serüven, kurucumuz <strong>Ahmet Cebeci</strong>'nin 2006 yılında <strong>Adana Yeşiloba Mahallesi Metal Sanayi Sitesi'nde</strong> kendi işletmesini kurmasıyla yepyeni bir boyuta taşındı.
          </p>
          <p>
            Geniş bir bölgesel hizmet ağına sahip olan Cebeci İş Makineleri olarak, yarım asra yaklaşan ustalığımızla sektörde güvenin adresi olmaya devam ediyoruz. CAT, Cummins, Komatsu ve Isuzu gibi dünya devlerinin orijinal ve garantili yedek parçalarını en hızlı şekilde tedarik ederek iş sürekliliğinizi güvence altına alıyoruz.
          </p>
        </div>

        <div className={styles.brandsSection}>
          <h2>Hizmet Verdiğimiz Markalar</h2>
          <div className={styles.brandLogos}>
            {brands.map((brand, idx) => (
              <div key={idx} className={styles.brandLogo}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
