'use client'
import { useState } from 'react'

import css from './index.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ModalWalletConnect from '@/components/ModalWalletConnect'


export default function Layout(props: React.HTMLAttributes<HTMLDivElement>) {
    const [modalWallet, setModalWallet] = useState(false)

    return <main className={css.page}>
        <Header setModalWallet={setModalWallet}/>
        { props.children }
        <Footer/>
        <ModalWalletConnect active={modalWallet} setActive={setModalWallet}/>
    </main>
}