'use client'

import { useState } from 'react'
import { StaticImageData } from 'next/image'

import css from './index.module.scss'

import { validateEmail } from '@/utils/validateEmail'
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
    const [codeSent, setCodeSent] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleGetCode = () => {
        if (validateEmail(email)) {
            setEmailError('')
            return setCodeSent(true)
        }
        return setEmailError('Incorrect email-address')
    }

    return <Modal active={props.active} setActive={props.setActive} style={{ maxWidth: '480px' }}>
        <Card className={css.card}>
            <CardBody>
                <form action="">
                    <Box mb={2}>
                        <Typography className={css.heading} variant="h3" center>Сonfirm email</Typography>
                        <Typography className={css.headingBottom} color='gray' variant="p" center>
                            Enter your {!codeSent && 'email address and request a'} verification code
                        </Typography>
                    </Box>
                    <Box mb={1}>
                        <Input
                            placeholder='Enter your email'
                            type='email'
                            disabled={codeSent}
                            required
                            value={email}
                            onChange={ e => setEmail(e.currentTarget.value) }
                            error={emailError}
                        />
                    </Box>
                    {
                        codeSent &&
                        <Box mb={1}>
                            <Input placeholder='Enter code' type='password'/>
                        </Box>
                    }
                    <Box mb={1}>
                        <Button
                            className={css.buttonEnter}
                            onClick={ (e) => {e.preventDefault(); handleGetCode()} }
                            size="lg"
                            color="gray"
                            fullWidth
                            animated
                            type='submit'
                        >
                            { codeSent ? 'Confirm code' : 'Get code' }
                        </Button>
                    </Box>
                    <Box>
                        <Button size="lg" color="gray" fullWidth animated>Cancel</Button>
                    </Box>
                </form>
            </CardBody>
        </Card>
    </Modal>
}