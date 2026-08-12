import { PageHeader } from '../../components/common/pageHeader/pageHeader'
import { SEO } from '../../components/common/seo/SEO'
import styles from './contactPage.module.css'

export function ContactPage() {
  const phoneNumber = '905322326452'
  const displayPhone = '0 (532) 232 64 52 (Ahmet Cebeci)'
  const encodedMessage = encodeURIComponent('Merhaba, Cebeci İş Makineleri ile iletişime geçmek istiyorum.')
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div>
      <SEO 
        title="İletişim | Cebeci İş Makinaları Adana" 
        description="Adana Seyhan Yeşiloba Sanayi Sitesi iş makinesi yedek parça mağazamızın adres ve telefon numaraları. WhatsApp'tan hızlıca fiyat ve stok bilgisi alın."
      />
      <PageHeader
        title="İletişim"
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'İletişim' }]}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h2>Bizimle İletişime Geçin</h2>
            
            <div className={styles.infoItem}>
              <h3>📍 Adres</h3>
              <p>Yeşiloba Mh. Yeni Sanayi Sitesi, Seyhan / Adana</p>
            </div>

            <div className={styles.infoItem}>
              <h3>📞 Telefon</h3>
              <p>
                <a href="tel:+903224281122">0 322 428 11 22</a><br/>
                <a href="tel:+903224287766">0 322 428 77 66</a><br/>
                <a href={`tel:+${phoneNumber}`}>{displayPhone}</a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>✉️ E-posta</h3>
              <a href="mailto:info@cebeciismakineleri.com">info@cebeciismakineleri.com</a>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
              WhatsApp'tan Yaz
            </a>
          </div>

          <div className={styles.mapSection}>
            {/* Google Maps Embed (Örnek konum olarak Adana Yeni Sanayi Sitesi kullanılmıştır) */}
            <iframe
              title="Cebeci İş Makineleri Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12750.6276707886!2d35.247656!3d36.98565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f6b4d3f3f5b%3A0x7d0a2d0b5e0c6a0a!2sAdana%20Yeni%20Sanayi%20Sitesi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              className={styles.map}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
