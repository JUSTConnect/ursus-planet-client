'use client'

import Image from 'next/image'
import { useDispatch } from 'react-redux';

import { SiOpenlayers } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";

import css from './index.module.scss'
import figureUrsa from './img/figure.svg'
import bgSpace from './img/bg-space.jpg'
import bgRelief from './img/relief.svg'
import bgLForest from './img/forest-left.svg'
import bgRForest from './img/forest-right.svg'

import { setModalWalletConnect } from '@/features/modal/modalSlice';
import { useMetaMask } from '@/hooks/useMetamask';
import Box from '@/components/core/Box'
import Container from '@/components/core/Container'
import Button from '@/components/core/Button'
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'

import Header from '@/components/Header'

import BottomSection from './BottomSection'



export default function Block1() {
    const dispatch = useDispatch()
    const {isConnected} = useMetaMask()

    return <Box className={css.wrapper}>
        <div className={css.topSection}>
            <Image className={css.bgSpace} src={bgSpace} alt='bg'/>
            <div className={css.bgRForest}>
                <Image src={bgRForest} alt='bg relief'/>
            </div>
            <div className={css.bgLForest}>
                <Image src={bgLForest} alt='bg relief'/>
            </div>
            <Image className={css.bgRelief} src={bgRelief} alt='bg relief'/>
            <Header/>
            <Container className={css.intro}>
                <div>
                    <Image
                        className={css.introFigure}
                        src={figureUrsa}
                        alt='figure-ursa'
                    />
                    <Typography
                        className={css.introHeading}
                        variant="h1"
                    >
                        Who are you?
                    </Typography>
                </div>
                <Stack fullWidth justifyCenter>
                    <Button
                        onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                        size='lg'
                        color={isConnected() ? 'primary' : 'dark'}
                        iconStart={<FaPlay />}
                        className={[css.introButton, !isConnected() && css.introButtonHover].join(' ')}
                    >
                        PLAYER
                    </Button>
                    <Button
                        onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                        size='lg'
                        color="dark"
                        iconStart={<SiOpenlayers />}
                        className={[css.introButton, !isConnected() && css.introButtonHover].join(' ')}
                        disabled={isConnected()}
                    >
                        PROJECT
                    </Button>
                </Stack>
            </Container>
        </div>
        <BottomSection/>
    </Box>
}