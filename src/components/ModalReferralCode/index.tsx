'use client'
import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Input from '@/components/core/Input/Input'

import css from './index.module.scss'


interface Props
{
    active: boolean
    setActive: CallableFunction
}


export default function ModalWalletConnect(props: Props) {


    return <Modal active={props.active} setActive={props.setActive} style={{ maxWidth: '480px' }}>
        <Card className={css.card}>
            <CardBody>
                <form action="">
                    <Box mb={2}>
                        <Typography className={css.heading} variant="h3" center>Enter referral code</Typography>
                        <Typography className={css.headingBottom} variant="p" center>
                            You can get referral code in our telegram or discord chat
                        </Typography>
                    </Box>
                    <Box mb={1}>
                        <Input
                            placeholder='Enter code'
                            type='email'
                        />
                    </Box>
                    <Box mb={1}>
                        <Button
                            className={css.buttonEnter}
                            size="lg"
                            color="white"
                            fullWidth
                            animated
                            hovered
                            type='button'
                        >
                            Enter
                        </Button>
                    </Box>
                    <Box>
                        <Button type='button' onClick={() => props.setActive(false)} size="lg" color="dark" hovered fullWidth>Cancel</Button>
                    </Box>
                </form>
            </CardBody>
        </Card>
    </Modal>
}