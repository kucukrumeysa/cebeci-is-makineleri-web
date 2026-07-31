export interface Product {
  id: number
  name: string
  slug: string
  category: string
  shortDescription: string
  image: string
  featured: boolean
  imageScale?: number
  imagePosition?: string
}