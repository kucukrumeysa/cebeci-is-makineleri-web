import { PageHeader } from '../../components/common/pageHeader/pageHeader'
import { SEO } from '../../components/common/seo/SEO'
import { services } from '../../data/services'
import styles from './servicesPage.module.css'

export function ServicesPage() {
  const phoneNumber = '905000000000'
  const encodedMessage = encodeURIComponent('Merhaba, sunduğunuz hizmetler hakkında detaylı bilgi almak istiyorum.')
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div>
      <SEO 
        title="Hizmetlerimiz | Orijinal Yedek Parça & Revizyon Kitleri" 
        description="CAT, Cummins, Isuzu ve Komatsu iş makineleri için motor bloğu, piston-gömlek kitleri, filtre sistemleri ve orijinal conta takımları tedariki."
      />
      <PageHeader
        title="Hizmetlerimiz"
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Hizmetlerimiz' }]}
      />

      <div className={styles.container}>
        <div className={styles.servicesList}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceInfo}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {/* Genişletilmiş açıklama eklenebilir */}
                <p style={{ marginTop: '10px' }}>
                  Sektördeki yılların tecrübesiyle, müşterilerimize en kaliteli hizmeti sunmak için sürekli çalışıyoruz. İhtiyacınız olan ürün veya desteği sağlarken güven ve şeffaflığı ön planda tutuyoruz.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBand}>
          <h2>Yardıma mı İhtiyacınız Var?</h2>
          <p>Hizmetlerimizle ilgili daha fazla bilgi veya özel talepleriniz için hemen bizimle iletişime geçin.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            WhatsApp'tan Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  )
}
