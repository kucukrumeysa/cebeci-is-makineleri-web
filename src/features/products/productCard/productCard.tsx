
import type { Product } from '../../../types/products'
import styles from './productCard.module.css'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
  src={product.image}
  alt={product.name}
  className={styles.image}
  style={{
    transform: `scale(${product.imageScale ?? 1})`
  }}
/>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.shortDescription}</p>

        <a
          href={`/urunler/${product.slug}`}
          className={styles.link}
        >
          Detayları İncele
        </a>
      </div>
    </article>
  )
}