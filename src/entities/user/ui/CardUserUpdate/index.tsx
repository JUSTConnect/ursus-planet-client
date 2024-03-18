'use client'
import {
    FormEvent,
    useEffect,
    useRef,
    useState
} from "react"
import {
    Box,
    Text,
    Flex,
    Skeleton,
    RadioGroup
} from "@radix-ui/themes"
import { AxiosError } from "axios"
import { FaEdit } from "react-icons/fa"
import { CheckCircledIcon } from "@radix-ui/react-icons"

import { useUserSelf, useUserSelfUpdate } from "@/entities/user/api"
import usernameHelper from "@/entities/user/helpers/username"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"
import TextField from "@/shared/ui/TextField"
import ModalEmail from "@/entities/user/ui/ModalEmail"


export default function CardUserUpdate() {

    const {fire} = useToast()

    const form = useRef<HTMLFormElement>(null)
    const submit = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState<string>('')
    const [modalEmail, setModalEmail] = useState<boolean>(false)

    const { data, isLoading } = useUserSelf()
    const { mutateAsync, isPending, error } = useUserSelfUpdate()

    useEffect(
        () => data && setUsername(usernameHelper(data?.username)),
        [data]
    )


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutateAsync(new FormData(e.currentTarget))
            .then(() => fire({text: 'Your profile was successfully updated!'}))
    }


    return <Card.Root tabulated value="profile">
        <Card.Head>
            <FaEdit /> Profile
        </Card.Head>
        <Card.Body>
            <form
                onSubmit={handleSubmit}
                ref={form}
            >
                <Box>
                    <Text
                        as='p'
                        size='5'
                        mb='5'
                    >
                        <Skeleton loading={isLoading}>
                            Username
                        </Skeleton>
                    </Text>
                    <RadioGroup.Root defaultValue="1" size='3'>
                        <Flex align='center' gap='4' mb='4'>
                            <Skeleton loading={isLoading}>
                                <RadioGroup.Item value="1" />
                            </Skeleton>
                            <Box style={{ width: '100%' }}>
                                <Skeleton loading={isLoading}>
                                    <TextField.Root mb='2'>
                                        {
                                            data?.username &&
                                                <TextField.Slot>
                                                    <CheckCircledIcon color="green" />
                                                </TextField.Slot>
                                        }
                                        <TextField.Input
                                            readOnly={!!data?.username}
                                            defaultValue={data?.username || ''}
                                            name='username'
                                            onInput={e => {setUsername(e.currentTarget.value)}}
                                            placeholder='Set your username'
                                            fullWidth
                                        />
                                    </TextField.Root>
                                </Skeleton>
                                {
                                    error &&
                                    <Text color="red">
                                        {((error as AxiosError)?.response?.data as any)?.username}
                                    </Text>
                                }
                            </Box>
                        </Flex>
                        <Flex align='center' gap='4' mb='5'>
                            <Skeleton loading={isLoading}>
                                <RadioGroup.Item value="2" disabled />
                            </Skeleton>
                            <Box>
                                <Text
                                    as='p'
                                    mb='2'
                                >
                                    <Skeleton loading={isLoading}>
                                        Domain ID
                                    </Skeleton>
                                </Text>
                                <Flex gap='2' wrap='wrap'>
                                    <Skeleton loading={isLoading}>
                                        <Button
                                            size='sm'
                                            color='white'
                                        >
                                            <CheckCircledIcon color='green' />
                                            Stiven38324
                                        </Button>
                                    </Skeleton>
                                    <Skeleton loading={isLoading}>
                                        <Button
                                            size='sm'
                                            color='gray'
                                        >
                                            Stiven38
                                        </Button>
                                    </Skeleton>
                                    <Skeleton loading={isLoading}>
                                        <Button
                                            size='sm'
                                            color='gray'
                                        >
                                            Stiven334
                                        </Button>
                                    </Skeleton>
                                </Flex>
                            </Box>
                        </Flex>
                    </RadioGroup.Root>
                </Box>
                <Text
                    as='p'
                    size='5'
                    mb='5'
                >
                    <Skeleton loading={isLoading}>
                        E-mail
                    </Skeleton>
                </Text>
                <Box>
                    <Skeleton loading={isLoading}>
                        <TextField.Root>
                            {
                                data?.email &&
                                <TextField.Slot>
                                    <CheckCircledIcon color="green" />
                                </TextField.Slot>
                            }
                            <TextField.Input
                                onClick={() => setModalEmail(true)}
                                defaultValue={data?.email || ''}
                                readOnly={!!data?.email}
                                placeholder='Set your email'
                            />
                        </TextField.Root>
                    </Skeleton>
                </Box>
                <input ref={submit} type="submit" hidden />
            </form>
        </Card.Body>
        {
            !isLoading && (username !== usernameHelper(data?.username)) &&
                <Card.Bottom>
                        <Button
                            onClick={() => submit.current?.click()}
                            color='gray'
                            wideWidth
                            hoverToWhite
                        >
                            {
                                isPending ? 'Saving...' : 'Save'
                            }
                        </Button>
                </Card.Bottom>
        }
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Card.Root >
}
