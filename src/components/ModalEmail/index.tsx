import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'

import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Input from '@/components/core/Input/Input'


interface Props
{
    active: boolean
    setActive: CallableFunction
}

interface Item
{
    figure: StaticImageData
    name: string
    detected?: boolean
}


export default function ModalWalletConnect(props: Props) {
    return <Modal active={props.active} setActive={props.setActive} style={{ maxWidth: '480px' }}>
        <Card className={css.card}>
            <CardBody>
                <Box mb={2}>
                    <Typography className={css.heading} variant="h3" center>Connect wallet</Typography>
                    <Typography className={css.headingBottom} color='gray' variant="p" center>
                        Select wallet from the list
                    </Typography>
                </Box>
                <Box mb={1}>
                    <Input placeholder='Enter your email'/>
                </Box>
                <Box mb={1}>
                    <Input placeholder='Enter code'/>
                </Box>
                <Box mb={1}>
                    <Button className={css.buttonEnter} size="lg" color="gray" fullWidth animated>Enter</Button>
                </Box>
                <Box>
                    <Button size="lg" color="gray" fullWidth animated>Cancel</Button>
                </Box>
            </CardBody>
        </Card>
    </Modal>
}