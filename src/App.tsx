import { FeaturedProducts } from './features/home/featuredProducts/featuredProducts'
import { Hero } from './features/home/hero/hero'
import { ServicesSection } from './features/home/serviceSection/serviceSection'
import { MainLayout } from './layouts/mainLayout'

function App() {
  return (
    <MainLayout>
      <Hero />
      <ServicesSection />
      <FeaturedProducts />
    </MainLayout>
  )
}

export default App