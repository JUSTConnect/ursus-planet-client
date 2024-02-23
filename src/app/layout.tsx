import type { Metadata } from 'next'

import './globals.scss'
import '@radix-ui/themes/styles.css';
import { play, fkalakokz } from '../fonts'
import Providers from '@/providers'
import ModalWalletConnect from '@/components/ModalWalletConnect'
import ModalDebug from '@/components/ModalDebug'

export const metadata: Metadata = {
  title: 'Ursas Planet',
  description: 'First raffle SocialFi platform',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={[play.className, fkalakokz.variable].join(' ')}>
        <Providers>
          {children}
          <ModalWalletConnect />
          <ModalDebug />
        </Providers>
      </body>
    </html>
  )
}
