import { ThemeProvider } from '../components/general/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/general/Header'
import HomeSidebar from '../components/home/HomeSidebar'
import Container from '../components/ui/container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simplified Home',
  description: 'Church ground control made simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header/>
          <Container>
            <div className="flex h-full">
              <HomeSidebar/>
              <div className="flex-grow">
                {children}
              </div>
            </div>
          </Container>

        </ThemeProvider>
      </body>
    </html>
  )
}
