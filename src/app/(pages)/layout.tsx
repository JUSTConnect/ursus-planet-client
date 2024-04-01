import type { Metadata } from 'next'

import '../scss/globals.scss'
import '../scss/theme-config.scss'
import '@/shared/scss/index.scss'
import '@radix-ui/themes/styles.css';
import { play, fkalakokz } from '../../fonts'
import Providers from '@/providers'
import ModalWalletConnect from '@/entities/web3/ui/ModalWalletConnect';

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
    <html lang="en" className='dark'>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={[play.variable, fkalakokz.variable].join(' ')}>
        <Providers>
          {children}
          <ModalWalletConnect />
        </Providers>
      </body>
    </html>
  )
}
