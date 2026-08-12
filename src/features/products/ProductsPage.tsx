import { useState } from 'react'
import { products, categoryLabels } from '../../data/products'
import { PageHeader } from '../../components/common/pageHeader/pageHeader'
import { SEO } from '../../components/common/seo/SEO'
import styles from './productsPage.module.css'

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const phoneNumber = '905322326452'

  // Benzersiz kategorileri ve markaları çıkar
  const categories = Array.from(new Set(products.map(p => p.category))).sort()
  const brands = Array.from(new Set(products.map(p => p.brand).filter(Boolean))) as string[]
  brands.sort()

  const filteredProducts = products.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false
    if (selectedBrand && p.brand !== selectedBrand) return false
    return true
  })

  const getWhatsAppLink = (productName: string) => {
    const encodedMessage = encodeURIComponent(`Merhaba, ${productName} hakkında bilgi almak istiyorum.`)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  return (
    <div>
      <SEO 
        title="Ürün Grupları | İş Makinesi Yedek Parçaları" 
        description="CAT piston kit çeşitleri, Cummins gömlek seti, Komatsu civata, eksantrik metal, conta takımı ve iş makinesi seal kit parçaları Adana'da stoktan teslim."
      />
      <PageHeader
        title="Yedek Parça Kataloğu"
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Ürünler' }]}
      />

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3>Kategoriler</h3>
            <ul className={styles.filterList}>
              <li>
                <button 
                  className={`${styles.filterButton} ${selectedCategory === null ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Tüm Kategoriler
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    className={`${styles.filterButton} ${selectedCategory === cat ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {categoryLabels[cat] || cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {brands.length > 0 && (
            <div className={styles.filterGroup}>
              <h3>Markalar</h3>
              <ul className={styles.filterList}>
                <li>
                  <button 
                    className={`${styles.filterButton} ${selectedBrand === null ? styles.active : ''}`}
                    onClick={() => setSelectedBrand(null)}
                  >
                    Tüm Markalar
                  </button>
                </li>
                {brands.map(brand => (
                  <li key={brand}>
                    <button 
                      className={`${styles.filterButton} ${selectedBrand === brand ? styles.active : ''}`}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <main className={styles.content}>
          <div className={styles.productsGrid}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className={styles.placeholderImage}>⚙️</div>
                  )}
                </div>
                <div className={styles.productInfo}>
                  {product.brand && <div className={styles.productBrand}>{product.brand}</div>}
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.productCategory}>{categoryLabels[product.category] || product.category}</div>
                  
                  <a 
                    href={getWhatsAppLink(product.name)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.whatsappButton}
                  >
                    WhatsApp'tan Sor
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>
              Seçilen filtrelere uygun ürün bulunamadı.
            </p>
          )}
        </main>
      </div>
    </div>
  )
}
