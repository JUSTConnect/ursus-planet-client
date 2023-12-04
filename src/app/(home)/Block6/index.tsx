import css from '../index.module.scss'

import Container from '@/components/core/Container'
import Button from '@/components/core/Button'


export default function Block6() {
    return <Container className={css.container}>
        <Button>Space</Button>
        <>All blockchain</>
        <Button>2k+ на Trusted projects</Button>
    </Container>
}