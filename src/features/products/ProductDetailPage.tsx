import { useParams } from 'react-router-dom'
import { PageHeader } from '../../components/common/pageHeader/pageHeader'
import { SEO } from '../../components/common/seo/SEO'
import { products, categoryLabels } from '../../data/products'
import styles from './productDetailPage.module.css'

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>()
  const phoneNumber = '905322326452'
  
  // Örnek: Eğer productId gelmezse test amaçlı ilk ürünü göster
  const product = productId 
    ? products.find(p => p.id === productId || p.slug === productId)
    : products[0]

  if (!product) {
    return (
      <div>
        <PageHeader title="Ürün Bulunamadı" breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Ürünler', href: '/urunler' }]} />
        <div className={styles.notFound}>Aradığınız ürün bulunamadı veya yayından kaldırılmış olabilir.</div>
      </div>
    )
  }

  const encodedMessage = encodeURIComponent(`Merhaba, ${product.name} ürünü hakkında fiyat ve stok bilgisi almak istiyorum.`)
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div>
      <SEO 
        title={`${product.name} | Cebeci İş Makinaları`} 
        description={`${product.brand} marka ${product.name} yedek parçası stoklarımızda. Hemen WhatsApp üzerinden ${product.name} hakkında fiyat ve teknik bilgi alın.`}
      />
      <PageHeader
        title={product.name}
        breadcrumbs={[
          { label: 'Anasayfa', href: '/' },
          { label: 'Ürünler', href: '/urunler' },
          { label: product.name }
        ]}
      />

      <div className={styles.container}>
        <div className={styles.productDetail}>
          <div className={styles.imageSection}>
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className={styles.placeholderImage}>⚙️</div>
            )}
          </div>
          
          <div className={styles.infoSection}>
            {product.brand && <div className={styles.brand}>{product.brand}</div>}
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.category}>{categoryLabels[product.category] || product.category}</div>
            
            {product.shortDescription && (
              <div className={styles.description}>
                {product.shortDescription}
              </div>
            )}
            
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappButton}
            >
              WhatsApp'tan Fiyat ve Stok Sor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
