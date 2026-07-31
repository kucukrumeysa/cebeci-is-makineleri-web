import type { Service } from '../types/service'

export const services: Service[] = [
  {
    id: 1,
    title: 'Orijinal Kalite Ürün',
    description:
      'Kaliteli ve dayanıklı iş makinesi yedek parçaları.',
    icon: '⚙️',
  },
  {
    id: 2,
    title: 'Hızlı Teslimat',
    description:
      'Siparişlerinizi güvenli ve hızlı şekilde ulaştırıyoruz.',
    icon: '🚚',
    highlighted: true,
  },
  {
    id: 3,
    title: 'Teknik Destek',
    description:
      'Doğru ürün seçimi için uzman desteği sağlıyoruz.',
    icon: '🎧',
  },
]