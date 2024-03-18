import { FormEvent } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AxiosError } from "axios"
import Link from "next/link"
import { Text, Flex, Heading } from "@radix-ui/themes"

import { useMySocialConnect, useMySocials } from "@/entities/social/api"
import TextField from "@/shared/ui/TextField"
import Modal from "@/shared/ui/Modal"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"

import css from './index.module.scss'


interface IModalTelegramConnect
{
    active: boolean
    setActive: CallableFunction
}


export default function ModalTelegramConnect(props: IModalTelegramConnect) {

    const router = useRouter()
    const pathname = usePathname()

    const {mutateAsync} = useMySocialConnect()
    const {refetch} = useMySocials()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append('social', 'telegram')
        mutateAsync(data)
            .catch((error) => {
                alert((error as AxiosError<{detail: string}>).response?.data?.detail)
            })
            .finally(() => {
                refetch()
                router.replace(pathname)
                props.setActive(false)
            })
    }

    return <Modal active={props.active} setActive={props.setActive}>
        <Card.Root className={css.card}>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <Flex direction='column' gap='3'>
                        <Heading size='8' align='center'>
                            Connect Telegram
                        </Heading>
                        <Text as='p' size='4' mb='3'>
                            Please enter <Text color="blue">code</Text> received by our telegram bot here.
                        </Text>
                        <TextField.Input placeholder='Enter code...' name='code'/>
                        <Link href='https://t.me/ursasplanet_bot' target="_blank">
                            <Button fullWidth color='white' type='button'>Go to bot</Button>
                        </Link>
                        <Button type='submit' fullWidth>Submit</Button>
                    </Flex>
                </form>
            </Card.Body>
        </Card.Root>
    </Modal>
}