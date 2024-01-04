import css from './index.module.scss'
import iconB3Heading from '../img/block-3-heading.png'

import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'
import Image from 'next/image'



export default function Block3() {
    return <div className={css.wrapper}>
        <Container className={css.container}>
            <Typography variant='h2'>
                <Stack alignCenter>
                    <Image
                        className={css.headingIcon}
                        src={iconB3Heading} alt='icon'
                    />
                    <span>
                        Eligleble<Typography color='primary'>(Free)</Typography> Games
                    </span>
                </Stack>
            </Typography>
        </Container>
    </div>
}