import type { ReactNode } from 'react'
import { Header } from '../components/layout/header/header'
import { Footer } from '../components/layout/footer/footer'
import { FloatingWhatsAppButton } from '../components/common/floatingWhatsAppButton/FloatingWhatsAppButton'
import styles from './mainLayout.module.css'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <FloatingWhatsAppButton />
      <Footer />
    </div>
  )
}