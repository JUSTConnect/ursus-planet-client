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

    const [username, setUsername] = useState<string>('')
    const [selectedDomain, setSelectedDomain] = useState<string>('')
    const [domains, setDomains] = useState<string[] | null>()
    const [activeRadio, setActiveRadio] = useState<string>('text')  // text or domain
    const [modalEmail, setModalEmail] = useState<boolean>(false)

    const { data, isLoading } = useMe()
    const { mutateAsync, isPending, error } = useMeUpdate()

    useEffect(() => {
        const f = async () => {
            const accs = await window.ethereum?.request({ method: 'eth_accounts' })
            if (accs && accs[0]) {
                dispatch(addAccount({address: accs[0], chainId: "1"}))
            } else {
                return
            }

            let allDomains: string[] = []
            const unstoppable = await getUnstoppable(accs[0])
            const bnb = await getSpaceId(accs[0])
            if (unstoppable) allDomains = [...allDomains, ...unstoppable]
            if (bnb) allDomains.push(bnb)
            setDomains(allDomains)
        }
        f()
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let name = ''

        if (activeRadio == 'text') {
            name = usernameInput.current?.value ? usernameInput.current?.value : ''
        } else if (activeRadio == 'domain') {
            if (domains && domains.length > 0 && !selectedDomain) {
                name = domains[0]
            } else {
                name = selectedDomain
            }
        }
        setUsername(name)
        console.log(name)
        const form = new FormData(e.currentTarget)
        form.set('username', name)
        mutateAsync(form)
            .then(() => fire({text: 'Your profile was successfully updated!'}))
    }

    const getUnstoppable = async (address: string) => {
        const resp = await fetch(
            `https://api.unstoppabledomains.com/resolve/reverse/query`,
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
        return data.data.map((i: {meta: {domain: string}}) => i.meta.domain, data)
    }

    const getSpaceId = async (address: string) => {
        const resp = await fetch(`https://api.prd.space.id/v1/getName?tld=bnb&address=${address}`)
        const data = await resp.json()
        if (data.code !== 0 || !data.name) return
        return data.name
    }

    const isActiveDomain = (domain: string) => {
        return activeRadio == 'domain' && selectedDomain == domain
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
                                <RadioGroup.Item value="1" onClick={() => {setActiveRadio('text')}} />
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
                                            disabled={activeRadio == 'domain'}
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
                                <RadioGroup.Item value="2" onClick={() => {setActiveRadio('domain')}} disabled={!Boolean(domains)} />
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
                                                    color={isActiveDomain(domain) ? 'white' : 'gray'}
                                                    hoverToWhite
                                                    onClick={() => {setSelectedDomain(domain)}}
                                                >
                                                    {isActiveDomain(domain) && <CheckCircledIcon color='green' />}
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
            !isLoading && ((username !== usernameHelper(data?.username)) || selectedDomain) &&
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
