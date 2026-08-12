export interface Product {
  id: string
  name: string
  slug: string
  brand?: string
  category: string
  shortDescription?: string
  image: string
  featured?: boolean
  imageScale?: number
  imagePosition?: string
}