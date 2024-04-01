'use client'
import { useState } from 'react'
import { Text, Box, Flex, Heading } from '@radix-ui/themes'
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { MdCancel } from "react-icons/md";

import { useMeEmailChange, useMeEmailVerify } from '@/entities/users/api';
import { validateEmail } from '@/shared/utils/validateEmail';
import Card from '@/shared/ui/Card'
import Modal from '@/shared/ui/Modal';
import Button from '@/shared/ui/Button'
import TextField from '@/shared/ui/TextField'
import { AxiosError } from 'axios'

import css from './index.module.scss'


interface Props {
    active: boolean
    setActive: CallableFunction
}


export default function ModalEmail(props: Props) {
    const [codeSent, setCodeSent] = useState(false)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [emailError, setEmailError] = useState('')
    const [codeError, setCodeError] = useState('')

    const { mutateAsync: mutateChange, isPending } = useMeEmailChange()
    const { mutateAsync: mutateVerify } = useMeEmailVerify()

    const handleGetCode = () => {
        if (!validateEmail(email)) {
            setEmailError('Incorrect email-address')
            return
        }
        setEmailError('')
        mutateChange({email: email})
            .then(() => {
                    setCodeSent(true)
                    setEmailError('')
                })
            .catch((error: AxiosError<{ detail: string }>) => 
            setEmailError(error?.response?.data?.detail as string)
        )
        return
    }

    const handleConfirmCode = () => {
        const data = new FormData()
        data.append('code', code)
        mutateVerify(data).then(
            () => {
                setCodeSent(false)
                setEmail('')
                setCode('')
                setCodeError('')
                props.setActive(false)
            }
        ).catch(
            (error: AxiosError<{detail: string}>) =>
                setCodeError(error?.response?.data?.detail as string)
        )
    }

    return <Modal active={props.active} setActive={props.setActive} className={css.modal}>
        <Card.Root className={css.card}>
            <Card.Body>
                <form action="">
                    <Flex
                        direction='column'
                        gap='3'
                    >
                        <Heading
                            size='8'
                            align='center'
                        >
                            Verify email
                        </Heading>
                        <Text
                            color='gray'
                            as="p"
                            align='center'
                            mb='3'
                        >
                            {
                                !codeSent ?
                                    <>
                                        Enter your <Text color='blue'>e-mail</Text> address
                                    </>
                                    :
                                    <>
                                        Verification <Text color='blue'>code</Text> sent to given <Text color='blue'>e-mail</Text>. Enter code to proceed.
                                    </>
                            }
                        </Text>
                        <Box>
                            <TextField.Root>
                                {
                                    codeSent &&
                                    <TextField.Slot>
                                        <CheckCircledIcon color='green' />
                                    </TextField.Slot>
                                }
                                <TextField.Input
                                    placeholder='Enter your email'
                                    size='lg'
                                    type='email'
                                    readOnly={codeSent}
                                    required
                                    value={email}
                                    onInput={e => setEmail(e.currentTarget.value)}
                                />
                                {
                                    codeSent &&
                                    <TextField.Slot>
                                        <Button
                                            onClick={() => setCodeSent(false)}
                                            size='sm'
                                            icon
                                        >
                                            <MdCancel />
                                        </Button>
                                    </TextField.Slot>
                                }
                            </TextField.Root>
                            {
                                emailError &&
                                    <Text color='red'>{emailError}</Text>
                            }
                        </Box>
                        {
                            codeSent &&
                            <Box>
                                <TextField.Input
                                    placeholder='Enter code'
                                    type='password'
                                    value={code}
                                    onInput={e => setCode(e.currentTarget.value)}
                                    size='lg'
                                />
                                {
                                codeError &&
                                    <Text color='red'>{codeError}</Text>
                                }
                            </Box>
                        }
                        <Button
                            onClick={(e) => { e.preventDefault(); !codeSent ? handleGetCode() : handleConfirmCode() }}
                            color="gray"
                            type='submit'
                            disabled={isPending}
                            fullWidth
                            hoverToWhite
                        >
                            {codeSent ? 'Confirm code' : 'Get code'}
                        </Button>
                        <Button
                            onClick={() => props.setActive(false)}
                            color="gray"
                            fullWidth
                        >
                            Cancel
                        </Button>
                    </Flex>
                </form>
            </Card.Body>
        </Card.Root>
    </Modal>
}