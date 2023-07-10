import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './base.module.scss'
import Nav from '@/components/Nav/nav'
import Footer from '@/components/Footer/footer'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300'] })


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
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <div className={styles.pageContainer}>
          <aside className={styles.navContainer}>
            <Nav />
          </aside>
          <main className={`${styles.contentContainer} ${inter.className}`}>
            {children}
          </main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
