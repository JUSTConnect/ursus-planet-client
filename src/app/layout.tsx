import type { Metadata } from 'next'

import './globals.scss'
import { play, fkalakokz } from './fonts'

import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[play.className, fkalakokz.variable].join(' ')}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
