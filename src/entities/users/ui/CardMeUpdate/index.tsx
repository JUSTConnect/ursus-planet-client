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
import { useSelector } from "react-redux";
import { RootState } from '@/store'

import { useMe, useMeUpdate } from "@/entities/users/api"
import usernameHelper from "@/entities/users/helpers/username"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"
import TextField from "@/shared/ui/TextField"
import ModalEmail from "@/entities/users/ui/ModalEmail"


export default function CardMeUpdate() {

    const {fire} = useToast()
    const { accounts } = useSelector((state: RootState) => state.web3)

    const form = useRef<HTMLFormElement>(null)
    const submit = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState<string>('')
    const [domains, setDomains] = useState<string[] | null>()
    const [modalEmail, setModalEmail] = useState<boolean>(false)

    const { data, isLoading } = useMe()
    const { mutateAsync, isPending, error } = useMeUpdate()

    useEffect(() => {
        console.log('ACCOUNTS', accounts)
        if (!accounts || !accounts[0]) return
        const account = accounts[0].address
        getUnstoppable(account)
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        form.set('username', username)
        mutateAsync(form)
            .then(() => fire({text: 'Your profile was successfully updated!'}))
    }

    const getUnstoppable = async (address: string) => {
        const query = new URLSearchParams('perPage: 100').toString();
        console.log('Address', address)
        const resp = await fetch(
            `https://api.unstoppabledomains.com/resolve/reverse/query?${query}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 8umj2rbsownpxuyz2hbw73dfcu3krdw6eenju1ofahg2tbwn`
                },
                body: JSON.stringify({addresses: [address]})
            }
        );

        const data = await resp.json();
        setDomains(data.data.map((i: {meta: {domain: string}}) => i.meta.domain, data))
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
                                <RadioGroup.Item value="2" disabled={!Boolean(domains)} onClick={e => {
                                    if (domains && domains.length > 0) setUsername(domains[0])}
                                } />
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
                                    {
                                        domains?.map((domain, index) =>
                                            <Skeleton key={index} loading={isLoading}>
                                                <Button
                                                    size='sm'
                                                    color='white'
                                                    hoverToWhite
                                                    onClick={() => {setUsername(domain)}}
                                                >
                                                    <CheckCircledIcon color='green' />
                                                    {domain}
                                                </Button>
                                            </Skeleton>
                                        )
                                    }
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
                            disabled={isPending}
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
