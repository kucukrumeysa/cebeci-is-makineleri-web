import type { ReactNode } from 'react'
import { Header } from '../components/layout/header/header'
import { Footer } from '../components/layout/footer/footer'
import styles from './MainLayout.module.css'

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

      <Footer />
    </div>
  )
}