import Image from 'next/image'

import css from './index.module.scss'
import bgSky from './img/bg-sky.jpg'
import bgForest from './img/bg-forest.png'
import bgBlur from './img/bg-blur.png'

import Footer from '@/components/Footer'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'


export default function Home() {
  return <>
    <Block1/>
    <Block2/>
    <Block3/>
    <Block4/>
    <Block5/>
    <Footer/>
  </>
}
