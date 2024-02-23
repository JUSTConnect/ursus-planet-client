'use client'
import { useState } from 'react'
import { useUserSelfSetReferrer, useUsersSelf } from '@/hooks/react-query/users'
import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Input from '@/components/core/Input/Input'

import css from './index.module.scss'
import { AxiosError } from 'axios'


interface Props
{
    active: boolean
    setActive: CallableFunction
}


export default function ModalWalletConnect(props: Props) {

    const [error, setError] = useState('')
    const {refetch} = useUsersSelf()
    const {mutateAsync} = useUserSelfSetReferrer()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutateAsync({username: e.currentTarget.username.value})
            .then(()=>{refetch(); props.setActive(false); setError('')})
            .catch(err=>setError((err as AxiosError<{detail: string}>).response?.data?.detail as string))
    }

    return <Modal active={props.active} setActive={props.setActive} style={{ maxWidth: '450px' }}>
        <Card className={css.card}>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <Typography className={css.heading} variant="h3" center>Enter referral code</Typography>
                        <Typography className={css.headingBottom} variant="p" center>
                            You can get referral code in our telegram or discord chat
                        </Typography>
                    </Box>
                    <Box mb={1}>
                        <Input
                            placeholder='Enter code'
                            name='username'
                            error={error}
                        />
                    </Box>
                    <Box mb={1}>
                        <Button
                            className={css.buttonEnter}
                            color="white"
                            fullWidth
                            animated
                            hovered
                            type='submit'
                        >
                            Enter
                        </Button>
                    </Box>
                    <Box>
                        <Button type='button' onClick={() => props.setActive(false)} color="dark" hovered fullWidth>Cancel</Button>
                    </Box>
                </form>
            </CardBody>
        </Card>
    </Modal>
}