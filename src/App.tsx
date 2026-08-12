import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FeaturedProducts } from './features/home/featuredProducts/featuredProducts'
import { Hero } from './features/home/hero/hero'
import { ServicesSection } from './features/home/serviceSection/serviceSection'
import { MainLayout } from './layouts/mainLayout'
import { AboutPreview } from './features/home/aboutPreview/aboutPreview'
import { SEO } from './components/common/seo/SEO'

import { ContactPage } from './features/contact/ContactPage'
import { ServicesPage } from './features/services/ServicesPage'
import { AboutPage } from './features/about/AboutPage'
import { ProductsPage } from './features/products/ProductsPage'
import { ProductDetailPage } from './features/products/ProductDetailPage'

function HomePage() {
  return (
    <>
      <SEO 
        title="Cebeci İş Makinaları | Adana Yedek Parça & Motor Bloğu" 
        description="Adana Seyhan'da CAT, Komatsu, Cummins, Isuzu iş makinesi yedek parça satışı. Piston, pompa, filtre, seal kit ve daha fazlası. WhatsApp'tan hemen sorun."
      />
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProducts />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/kurumsal" element={<AboutPage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/urun-gruplari" element={<ProductsPage />} />
          <Route path="/urunler/:productId" element={<ProductDetailPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App