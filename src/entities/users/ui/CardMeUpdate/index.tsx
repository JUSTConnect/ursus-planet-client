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
import { useDispatch } from "react-redux";

import { useMe, useMeUpdate } from "@/entities/users/api"
import usernameHelper from "@/entities/users/helpers/username"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"
import TextField from "@/shared/ui/TextField"
import ModalEmail from "@/entities/users/ui/ModalEmail"
import { addAccount } from '@/features/web3/web3Slice'


export default function CardMeUpdate() {

    const {fire} = useToast()
    const dispatch = useDispatch()

    const form = useRef<HTMLFormElement>(null)
    const submit = useRef<HTMLInputElement>(null)
    const usernameInput = useRef<HTMLInputElement>(null)
    const radioInput = useRef<HTMLButtonElement>(null)
    const radioDomain = useRef<HTMLButtonElement>(null)

    const [username, setUsername] = useState<string>('')
    const [selectedDomain, setSelectedDomain] = useState<string>('')
    const [domains, setDomains] = useState<string[] | null>()
    const [modalEmail, setModalEmail] = useState<boolean>(false)

    const { data, isLoading } = useMe()
    const { mutateAsync, isPending, error } = useMeUpdate()

    useEffect(() => {
        const f = async () => {
            const accs = await window.ethereum?.request({ method: 'eth_accounts' })
            console.log('accs', accs)
            if (accs && accs[0]) {
                dispatch(addAccount({address: accs[0], chainId: "1"}))
            } else {
                return
            }
            getUnstoppable(accs[0])
        }
        f()
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (radioInput.current?.checked) {
            setUsername(usernameInput.current?.value ? usernameInput.current?.value : '')
        } else if (radioDomain.current?.checked) {
            if (domains && domains.length > 0 && !selectedDomain) {
                setUsername(domains[0])
            } else {
                setUsername(selectedDomain)
            }
        }
        const form = new FormData(e.currentTarget)
        form.set('username', username)
        mutateAsync(form)
            .then(() => fire({text: 'Your profile was successfully updated!'}))
    }

    const getUnstoppable = async (address: string) => {
        const query = new URLSearchParams('perPage: 100').toString();
        address = '0x6735646dBA76763695Be5395bf2F4245046Db44C'
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
        console.log(data)
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
                                <RadioGroup.Item value="1" ref={radioInput} />
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
                                            disabled={radioDomain.current.checked}
                                            ref={usernameInput}
                                            readOnly={!!data?.username}
                                            defaultValue={data?.username || ''}
                                            name='username'
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
                                <RadioGroup.Item value="2" ref={radioDomain} disabled={!Boolean(domains)} />
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
                                                    onClick={() => {setSelectedDomain(domain)}}
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
