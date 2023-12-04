import Image from 'next/image'

import css from './index.module.scss'
import iconPlayer from '../img/block-1-player.png'
import iconProject from '../img/block-1-project.png'
import figureUrsa from '../img/figure-ursa.png'

import Container from '@/components/core/Container'
import Button from '@/components/core/Button'
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'

export default function Block1() {
    return <Container className={css.container}>
        <Typography
            variant="h1"
            className={css.heading}
        >
            Who are you?
        </Typography>
        <Image
            className={css.figureUrsa}
            src={figureUrsa}
            alt='figure-ursa'
        />
        <Stack fullWidth justifyCenter>
            <Button
                size='lg'
                color="dark"
                iconStart={<Image src={iconPlayer} alt="icon" />}
                className={css.button}
            >
                PLAYER
            </Button>
            <Button
                size='lg'
                color="dark"
                iconStart={<Image src={iconProject} alt="icon" />}
                className={css.button}
            >
                PROJECT
            </Button>
        </Stack>
    </Container>
}