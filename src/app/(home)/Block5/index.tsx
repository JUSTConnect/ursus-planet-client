import css from '../index.module.scss'

import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'


export default function Block5() {
    return <Container className={css.container}>
        <Typography variant='h2'>Upcoming games</Typography>
        <>All prize</>
        <Button color='gray'>View more</Button>
    </Container>
}