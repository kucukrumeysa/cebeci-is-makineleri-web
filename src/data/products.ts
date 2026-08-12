import type { Product } from '../types/products'

export const products: Product[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
  // --- Piston / Gömlek / Segman ---
  { id: 'cat-piston-kit-339-8176', name: 'Piston Kit Çeşitleri (339-8176)', slug: 'cat-piston-kit-339-8176', brand: 'CAT', category: 'Piston-Gömlek-Segman', image: '/images/products/ctp-piston-parcalari-kutu.jpg' },
  { id: 'cat-piston-cesitleri', name: 'Piston Çeşitleri', slug: 'cat-piston-cesitleri', brand: 'CAT', category: 'Piston-Gömlek-Segman', image: '/images/products/tek-piston-render.jpg' },
  { id: 'cummins-gomlek-cesitleri', name: 'Gömlek Çeşitleri', slug: 'cummins-gomlek-cesitleri', brand: 'Cummins', category: 'Piston-Gömlek-Segman', image: '/images/products/cummins-gomlek.jpg' },
  { id: 'cummins-piston-kit-4bt-6bt', name: 'Piston Kit Çeşitleri (4BT / 6BT)', slug: 'cummins-piston-kit-4bt-6bt', brand: 'Cummins', category: 'Piston-Gömlek-Segman', image: '/images/products/cummins-piston-kit4BT-6BT.jpg' },
  { id: 'cummins-piston-gomlek', name: 'Piston ve Gömlek Çeşitleri', slug: 'cummins-piston-gomlek', brand: 'Cummins', category: 'Piston-Gömlek-Segman', image: '/images/products/piston-gomlek-segman-kiti.jpg' },
  { id: 'cummins-silindir-gomlek', name: 'Motor Silindir Gömlek', slug: 'cummins-silindir-gomlek', brand: 'Cummins', category: 'Piston-Gömlek-Segman', image: '/images/products/cummins-silindir-gomlek.jpg' },
  { id: 'cummins-piston-set', name: 'Piston Set', slug: 'cummins-piston-set', brand: 'Cummins', category: 'Piston-Gömlek-Segman', image: '/images/products/cummins-piston-set.jpg' },
  { id: 'isuzu-gomlek-set-4hk1-6hk1', name: 'Gömlek Set (4HK1 / 6HK1)', slug: 'isuzu-gomlek-set-4hk1-6hk1', brand: 'Isuzu', category: 'Piston-Gömlek-Segman', image: '/images/products/isuzu-gomlek-set.png' },

  // --- Pompa / Devirdaim ---
  { id: 'cat-3304-mazot-pompasi', name: '3304 Motor Mazot Pompası', slug: 'cat-3304-mazot-pompasi', brand: 'CAT', category: 'Pompa-Devirdaim', image: '/images/products/su-pompasi-water-pump.jpg' },
  { id: 'cat-pompa-devirdaim', name: 'Pompa - Devirdaim Çeşitleri', slug: 'cat-pompa-devirdaim', brand: 'CAT', category: 'Pompa-Devirdaim', image: '/images/products/cat-pompa-devirdaim-cesitleri.png' },
  { id: 'cat-motor-yag-pompalari', name: 'Motor Yağ Pompaları', slug: 'cat-motor-yag-pompalari', brand: 'CAT', category: 'Pompa-Devirdaim', image: '/images/products/cat-motor-yag-pompalari.png' },
  { id: 'jcb-devirdaim', name: 'Devirdaim', slug: 'jcb-devirdaim', brand: 'JCB', category: 'Pompa-Devirdaim', image: '/images/products/jcb-devirdaim.png' },
  { id: 'mazot-otomatigi', name: 'Mazot Otomatiği', slug: 'mazot-otomatigi', brand: 'Çeşitli', category: 'Pompa-Devirdaim', image: '/images/products/mazot-otomatigi.png' },

  // --- Emme - Egzoz Supap ---
  { id: 'cat-emme-egzoz-subap', name: 'Emme ve Egzoz Supap', slug: 'cat-emme-egzoz-subap', brand: 'CAT', category: 'Supap', image: '/images/products/cat-emme-subab-ve-egzoz-subab.png' },

  // --- Ana Yatak - Kol Yatak ---
  { id: 'cummins-kol-ana-yatak', name: 'Kol ve Ana Yatak', slug: 'cummins-kol-ana-yatak', brand: 'Cummins', category: 'Ana-Kol-Yatak', image: '/images/products/komple-motor-revizyon-kiti.jpg' },
  { id: 'isuzu-eksantrik-metal-6hk1-4hk1', name: 'Eksantrik Metal (6HK1 / 4HK1)', slug: 'isuzu-eksantrik-metal-6hk1-4hk1', brand: 'Isuzu', category: 'Ana-Kol-Yatak', image: '/images/products/isuzu-eksantrik-metal.png' },

  // --- Takım Conta ---
  { id: 'cat-takim-conta', name: 'Takım Conta', slug: 'cat-takim-conta', brand: 'CAT', category: 'Takim-Conta', image: '/images/products/silindir-gomlek-piston-conta-seti.jpg' },

  // --- Yağ Soğutucu / Şanzıman Soğutucu ---
  { id: 'cat-yag-sogutucu-sanziman', name: 'Yağ Soğutucu - Şanzıman Soğutucu', slug: 'cat-yag-sogutucu-sanziman', brand: 'CAT', category: 'Yag-Sogutucu', image: '/images/products/cat-175-7453-oil-cooler.jpg' },

  // --- Filtreler ---
  { id: 'cat-orj-filtreler-1r0716-1r1808', name: 'Orijinal Filtreler (1R 0716 / 1R 1808)', slug: 'cat-orj-filtreler-1r0716-1r1808', brand: 'CAT', category: 'Filtre', image: '/images/products/cat-yakit-filtreleri-seti.jpg' },
  { id: 'cat-orijinal-filtreler', name: 'Orijinal Filtreler', slug: 'cat-orijinal-filtreler', brand: 'CAT', category: 'Filtre', image: '/images/products/cat-yag-ve-yakit-filtreleri.jpg' },

  // --- Seal Kit ---
  { id: 'cat-seal-kit-cesitleri', name: 'Seal Kit Çeşitleri', slug: 'cat-seal-kit-cesitleri', brand: 'CAT', category: 'Seal-Kit', image: '/images/products/cat-orijinal-o-ring-seti.jpg' },

  // --- Kayış / Zincir ---
  { id: 'cat-orijinal-kayis', name: 'Orijinal Kayış Çeşitleri', slug: 'cat-orijinal-kayis', brand: 'CAT', category: 'Kayis-Zincir', image: '/images/products/cat-orijinal-kayis-cesitleri.png' },
  { id: 'cat-tahrik-zincir-562-8112', name: 'Orijinal Tahrik Zincir Çeşitleri (562-8112)', slug: 'cat-tahrik-zincir-562-8112', brand: 'CAT', category: 'Kayis-Zincir', image: '/images/products/cat-orijinal-tahrik-zincir-cesitleri.png' },
  { id: 'cat-tahrik-zincir-562-8115', name: 'Orijinal Tahrik Zincir Çeşitleri (562-8115)', slug: 'cat-tahrik-zincir-562-8115', brand: 'CAT', category: 'Kayis-Zincir', image: '/images/products/cat-orijinal-tahrik-zincir-cesitleri.png' },

  // --- Pinyon / Dişli / Şaft ---
  { id: 'cat-saft-pinyon-disli', name: 'Şaft, Pinyon, Dişli Çeşitleri', slug: 'cat-saft-pinyon-disli', brand: 'CAT', category: 'Pinyon-Disli-Saft', image: '/images/products/volan-flywheel.jpg' },
  { id: 'komatsu-perno-mili', name: 'Perno Mili', slug: 'komatsu-perno-mili', brand: 'Komatsu', category: 'Pinyon-Disli-Saft', image: '/images/products/komatsu-perno-milipng.png' },

  // --- Keçe / Aşınma Parçaları ---
  { id: 'cat-greyder-kece-cesitleri', name: 'Greyder Keçe Çeşitleri', slug: 'cat-greyder-kece-cesitleri', brand: 'CAT', category: 'Kece-Asinma', image: '/images/products/cat-greyder-kece-cesitleri.png' },
  { id: 'cat-daire-asinma-seridi', name: 'Daire Aşınma Şeridi', slug: 'cat-daire-asinma-seridi', brand: 'CAT', category: 'Kece-Asinma', image: '/images/products/cat-daire-asinma-seridi.png' },
  { id: 'cat-greyder-ring-wear', name: 'Greyder Ring-Wear (Aşınma Halkası)', slug: 'cat-greyder-ring-wear', brand: 'CAT', category: 'Kece-Asinma', image: '/images/products/cat-greyder-ring-wear-asinma-halkasi.png' },

  // --- Göstergeler ---
  { id: 'cat-gosterge-yag-hararet-yakit', name: 'Motor Yağ / Hararet / Yakıt Göstergesi', slug: 'cat-gosterge-yag-hararet-yakit', brand: 'CAT', category: 'Gosterge', image: '/images/products/cat-motor-yag-gostergesi-hararet-gostergesi-yakit-gostergesi.png' },

  // --- Civata ---
  { id: 'komatsu-civata-m26x200', name: 'Civata (M26x200)', slug: 'komatsu-civata-m26x200', brand: 'Komatsu', category: 'Civata', image: '/images/products/komatsu-civata-m26x200.png' },
  { id: 'komatsu-civata-m30x200', name: 'Civata (M30x200)', slug: 'komatsu-civata-m30x200', brand: 'Komatsu', category: 'Civata', image: '/images/products/komatsu-civata-m30x200.png' },
  { id: 'komatsu-civata-m30x215', name: 'Civata (M30x215)', slug: 'komatsu-civata-m30x215', brand: 'Komatsu', category: 'Civata', image: '/images/products/komatsu-civata-m30x215.png' },
  { id: 'komatsu-civata-m30x220', name: 'Civata (M30x220)', slug: 'komatsu-civata-m30x220', brand: 'Komatsu', category: 'Civata', image: '/images/products/komatsu-civatasi-m30x220.png' },
  { id: 'komatsu-muhtelif-sifir-lift', name: 'Muhtelif Sıfır Lift Çeşitleri', slug: 'komatsu-muhtelif-sifir-lift', brand: 'Komatsu', category: 'Civata', image: '/images/products/cat-yedek-parca-koleksiyonu.jpg' },

  // --- Sıfır & İkinci El Ekipman / Motor (ayrı kategori) ---
  { id: 'cat-3304-motor-blok', name: '3304 Motor Blok', slug: 'cat-3304-motor-blok', brand: 'CAT', category: 'Ekipman-Motor', image: '/images/products/6-silindirli-motor-blogu.jpg' },
  { id: 'cat-3306-motor', name: '3306 Motor', slug: 'cat-3306-motor', brand: 'CAT', category: 'Ekipman-Motor', image: '/images/products/cat-3306-motor.png' },
  { id: 'cat-966h-loder', name: '966H Loder (Yükleyici)', slug: 'cat-966h-loder', brand: 'CAT', category: 'Ekipman-Motor', image: '/images/products/cat-loder-yukleyici-966h.png' },
  { id: 'cat-d7g-sase-komple', name: 'D7G Şase Komple (4 Adet)', slug: 'cat-d7g-sase-komple', brand: 'CAT', category: 'Ekipman-Motor', image: '/images/products/cat-d7g-sase-komple-4adet.png' },
]

export const categoryLabels: Record<string, string> = {
  'Motor Parçaları': 'Motor Parçaları',
  'Filtre Sistemleri': 'Filtre Sistemleri',
  'Piston-Gömlek-Segman': 'Piston • Gömlek • Segman Çeşitleri',
  'Pompa-Devirdaim': 'Pompa • Devirdaim Çeşitleri',
  'Supap': 'Emme - Egzoz Supap Çeşitleri',
  'Ana-Kol-Yatak': 'Ana Yatak - Kol Yatak Çeşitleri',
  'Takim-Conta': 'Takım Conta Çeşitleri',
  'Yag-Sogutucu': 'Yağ Soğutucu - Şanzıman Soğutucu Çeşitleri',
  'Filtre': 'Yağ / Mazot / Hava Filtre Çeşitleri',
  'Seal-Kit': 'Seal Kit Çeşitleri',
  'Kayis-Zincir': 'Kayış - Zincir Çeşitleri',
  'Pinyon-Disli-Saft': 'Pinyon - Dişli - Şaft Çeşitleri',
  'Kece-Asinma': 'Keçe - Aşınma Parçaları',
  'Gosterge': 'Gösterge Çeşitleri',
  'Civata': 'Civata Çeşitleri',
  'Ekipman-Motor': 'Sıfır & İkinci El Ekipman / Motor',
}