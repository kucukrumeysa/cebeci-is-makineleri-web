import type { Product } from '../types/products'

export const products: Product[] = [
  {
    id: 1,
    name: 'Motor Bloğu',
    slug: 'motor-blogu',
    category: 'Motor Parçaları',
    shortDescription:
      'CAT, Komatsu ve diğer iş makineleri için yüksek kaliteli motor blokları.',
    image: '/images/products/motor-blogu.png',
    featured: true,
    imageScale: 1.32,
    imagePosition: 'center',
  },
  {
    id: 2,
    name: 'Piston • Gömlek • Segman',
    slug: 'piston-gomlek-segman',
    category: 'Motor Parçaları',
    shortDescription:
      'Motor revizyonlarında kullanılan piston, gömlek ve segman setleri.',
    image: '/images/products/piston-gomlek-segman.png',
    featured: true,
    imageScale: 1.3,
    imagePosition: 'center',
  },
  {
    id: 3,
    name: 'Filtre Sistemleri',
    slug: 'filtre-sistemleri',
    category: 'Filtre Sistemleri',
    shortDescription:
      'Yağ, hava ve yakıt filtreleri ile motorunuzu güvenle koruyun.',
    image: '/images/products/cat-filtreleri.png',
    featured: true,
    imageScale: 1.12,
    imagePosition: 'center',
  },
  {
    id: 4,
    name: 'Egzoz Manifoldu',
    slug: 'egzoz-manifoldu',
    category: 'Motor Parçaları',
    shortDescription:
      'Dayanıklı döküm egzoz manifoldları ve motor yedek parçaları.',
    image: '/images/products/egzoz-manifoldu.png',
    featured: true,
    imageScale: 1.42,
    imagePosition: 'center',
  },
]