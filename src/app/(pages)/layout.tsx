import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-refux';
import type { Metadata } from 'next'

import '../scss/globals.scss'
import '../scss/theme-config.scss'
import '@/shared/scss/index.scss'
import '@radix-ui/themes/styles.css';
import { play, fkalakokz } from '../../fonts'
import Providers from '@/providers'
import ModalWalletConnect from '@/entities/web3/ui/ModalWalletConnect';
import { RootState } from '@/store'
import { addAccount } from '@/features/web3/web3Slice'

export const metadata: Metadata = {
  title: 'Ursas Planet',
  description: 'First raffle SocialFi platform',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { accounts } = useSelector((state: RootState) => state.web3)
  const dispatch = useDispatch()

  useEffect(() => {
    const f = async () => {
        if (!accounts) {
          const accs = await window.ethereum?.request({ method: 'eth_accounts' })
          if (accs && accs[0]) dispatch(addAccount({address: accs[0].address, chainId: "1"}))
        }
    }
    f()
  }, [])

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
