'use client'

import { useState } from 'react'

import Footer from '@/components/Footer'
import ModalWalletConnect from '@/components/ModalWalletConnect'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'


export default function Home() {
  const [modalWallet, setModalWallet] = useState(false)

  return <>
    <Block1 setModalWallet={setModalWallet}/>
    <Block2/>
    <Block3/>
    <Block4/>
    <Block5/>
    <Footer/>
    <ModalWalletConnect active={modalWallet} setActive={setModalWallet}/>
  </>
}
