'use client'
import { useState } from 'react'

import { useEmailChange, useEmailVerify, useUsersSelf } from '@/hooks/react-query/users'
import { validateEmail } from '@/utils/validateEmail'
import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Input from '@/components/core/Input/Input'
import { AxiosError } from 'axios'

import css from './index.module.scss'


interface Props
{
    active: boolean
    setActive: CallableFunction
}


export default function ModalWalletConnect(props: Props) {
    const [codeSent, setCodeSent] = useState(false)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [emailError, setEmailError] = useState('')
    const [codeError, setCodeError] = useState('')

    const {refetch} = useUsersSelf()
    const {mutateAsync: mutateChange, isPending, error: errorChange} = useEmailChange()
    const {mutateAsync: mutateVerify} = useEmailVerify()

    const handleGetCode = () => {
        if (validateEmail(email)) {
            setEmailError('')
            const data = new FormData()
            data.append('email', email)
            mutateChange(data).then(
                () => {setCodeSent(true); setEmailError('')}
            ).catch(
                (err: AxiosError<{detail: string}>) => setEmailError(err?.response?.data?.detail||'')
            )
            return
        }
        return setEmailError('Incorrect email-address')
    }

    const handleConfirmCode = () => {
        const data = new FormData()
        data.append('code', code)
        mutateVerify(data).then(
            () => {
                setEmail('')
                setCode('')
                setCodeError('')
                props.setActive(false)
                setTimeout(() => {
                    refetch()
                }, 3000)
            }
        ).catch(
            (err: AxiosError<{detail: string}>) => setCodeError(err?.response?.data?.detail||'')
        )
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
                            error={emailError||(errorChange as AxiosError<{detail: string}>)?.response?.data.detail}
                        />
                    </Box>
                    {
                        codeSent &&
                        <Box mb={1}>
                            <Input
                                placeholder='Enter code'
                                type='password'
                                value={code}
                                onChange={ e => setCode(e.currentTarget.value) }    
                                error={codeError}
                            />
                        </Box>
                    }
                    <Box mb={1}>
                        <Button
                            className={css.buttonEnter}
                            onClick={ (e) => {e.preventDefault(); !codeSent ? handleGetCode() : handleConfirmCode()} }
                            size="lg"
                            color="gray"
                            fullWidth
                            animated
                            type='submit'
                            disabled={isPending}
                        >
                            { codeSent ? 'Confirm code' : 'Get code' }
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            onClick={ () => props.setActive(false) }
                            size="lg"
                            color="gray"
                            fullWidth
                            animated
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            </CardBody>
        </Card>
    </Modal>
}