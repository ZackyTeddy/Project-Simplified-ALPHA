"use client"

import { ThemeProvider } from '../components/general/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/general/Header'
import HomeSidebar from '../components/home/HomeSidebar'
import Container from '../components/ui/container'
import { Provider } from 'react-redux'
import {globalStore} from '../redux/globalStore'
import React from 'react'
import Head from 'next/head'
import { Toaster } from '@/components/ui/toaster'
import Submenu from '@/components/general/Submenu'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
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
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body className={`${inter.className} h-screen`}>
        <Provider store={globalStore}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Container>
              <div className="flex flex-row h-screen">
                <HomeSidebar/>
                <Submenu/>
                <div className="flex-auto">
                  {children}
                </div>
                <Toaster/>
              </div>
            </Container>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
