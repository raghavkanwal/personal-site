import './globals.css'
import { Inter } from 'next/font/google'
import styles from './base.module.scss'
import Nav from '@/components/Nav/nav'
import Footer from '@/components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raghav Kanwal',
  description: 'Frontend Engineer based in Vancouver, British Columbia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.pageContainer}>
          <aside className={styles.navContainer}>
            <Nav />
          </aside>
          <main className={styles.contentContainer}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
