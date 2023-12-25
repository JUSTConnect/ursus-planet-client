'use client'

import Image from 'next/image'

import css from './index.module.scss'
import iconPlayer from './img/icon-player.png'
import iconProject from './img/icon-project.png'
import figureUrsa from './img/figure.svg'
import bgRelief from './img/relief.svg'
import bgLForest from './img/forest-left.svg'
import bgRForest from './img/forest-right.svg'

import Box from '@/components/core/Box'
import Container from '@/components/core/Container'
import Button from '@/components/core/Button'
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'

import Header from '@/components/Header'

import BottomSection from './BottomSection'



export default function Block1() {

    return <Box className={css.wrapper}>
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
                    size='lg'
                    color="dark"
                    iconStart={<Image src={iconPlayer} alt="icon" />}
                    className={css.introButton}
                >
                    PLAYER
                </Button>
                <Button
                    size='lg'
                    color="dark"
                    iconStart={<Image src={iconProject} alt="icon" />}
                    className={css.introButton}
                >
                    PROJECT
                </Button>
            </Stack>
        </Container>
        <BottomSection/>
    </Box>
}