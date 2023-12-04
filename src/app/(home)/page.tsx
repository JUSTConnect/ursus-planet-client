import Image from 'next/image'

import css from './index.module.scss'
import bgSky from './img/bg-sky.jpg'
import bgForest from './img/bg-forest.png'
import bgBlur from './img/bg-blur.png'
import iconB3Heading from './img/block-3-heading.png'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/core/Button'
import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'
import Block6 from './Block6'


export default function Home() {
  return <>
    <div className={css.group}>
        <Image
            className={css.groupBgSky}
            src={bgSky}
            alt='background'
        />
        <Image
            className={css.groupBgForest}
            src={bgForest}
            alt='background'
        />
        <Image
            className={css.groupBgBlur}
            src={bgBlur}
            alt='background'
        />
        <Header/>
        <Block1/>
        <Block2/>
    </div>
    <Block3/>
    <Block4/>
    <Block5/>
    <Block6/>
    <Footer/>
  </>
}
