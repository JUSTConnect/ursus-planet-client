'use client'
import { useState } from 'react'
import { useMeSetReferrer } from '@/entities/referral_program/api'
import { Box, Heading, Text, Flex } from '@radix-ui/themes'
import { AxiosError } from 'axios'

import Card from '@/shared/ui/Card'
import Modal from '@/shared/ui/Modal'
import Button from '@/shared/ui/Button'
import TextField from '@/shared/ui/TextField'

import css from './index.module.scss'


interface Props
{
    active: boolean
    setActive: CallableFunction
}


export default function ModalReferralCode(props: Props) {

    const [error, setError] = useState('')
    const {mutateAsync} = useMeSetReferrer()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutateAsync({username: e.currentTarget.referrer.value})
            .then(()=>{ props.setActive(false); setError('')} )
            .catch(err=>setError((err as AxiosError<{detail: string}>).response?.data?.detail as string))
    }

    return <Modal className={css.modal} active={props.active} setActive={props.setActive}>
        <Card.Root>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <Flex direction='column' gap='3'>
                        <Box>
                            <Heading size='7' align='center'>Enter referral code</Heading>
                            <Text
                                as='p'
                                mb='3'
                            >
                                You can get referral code in our telegram or discord chat.
                            </Text>
                        </Box>
                        <Box>
                            <TextField.Input
                                placeholder='Enter referral code'
                                name='referrer'
                            />
                            {
                                error &&
                                    <Text color='red'>{error}</Text>
                            }
                        </Box>
                        <Box>
                            <Button
                                color="white"
                                type='submit'
                                fullWidth
                            >
                                Enter
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                onClick={() => props.setActive(false)}
                                fullWidth
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Flex>
                </form>
            </Card.Body>
        </Card.Root>
    </Modal>
}