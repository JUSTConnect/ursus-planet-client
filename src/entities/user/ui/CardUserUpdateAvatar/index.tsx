'use client'
import {
    FormEvent,
    useRef,
    useState
} from "react"
import {
    Box,
    Text,
    Flex,
    Skeleton
} from "@radix-ui/themes"
import { AxiosError } from "axios"
import { FaCircleInfo, FaCircleUser } from "react-icons/fa6"
import { RiAlertFill } from "react-icons/ri"

import { useUserSelf, useUserSelfUpdate } from "@/entities/user/api"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"
import Avatar from "@/shared/ui/Avatar"

import css from './index.module.scss'


export default function CardUserUpdateAvatar() {

    const {fire} = useToast()

    const [avatar, setAvatar] = useState('')

    const { data, isLoading } = useUserSelf()
    const { mutateAsync, isPending, error } = useUserSelfUpdate()

    const input = useRef<HTMLInputElement>(null)
    const submit = useRef<HTMLInputElement>(null)

    const handleChange = () => {
        const avatar = input.current?.files?.[0]
        avatar && setAvatar(URL.createObjectURL(avatar))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        mutateAsync(formData).then(() => {
            setAvatar('')
            fire({text: 'Your avatar was successfully updated!'})
        })
        e.currentTarget.reset()
    }

    return <Card.Root tabulated value="avatar">
        <Card.Head>
            <FaCircleUser /> Avatar
        </Card.Head>
        <Card.Body>
            <form
                encType='multipart/form-data'
                onSubmit={handleSubmit}
            >

                <Text
                    as='p'
                    size='5'
                    mb='5'
                >
                    <Skeleton loading={isLoading}>
                        Profile Image
                    </Skeleton>
                </Text>

                <Flex gap={{
                    initial: '4',
                    sm: '5'
                }}>
                    <Box>
                        <Avatar
                            className={css.avatar}
                            loading={isLoading}
                            src={avatar || data?.avatar}
                            colors={data}
                        />
                    </Box>
                    <Box>
                        <Skeleton loading={isLoading}>
                            <Flex
                                align='center'
                                gap='3'
                                mb='4'
                            >
                                <Box>
                                    <FaCircleInfo />
                                </Box>
                                Recommend an image of at least 300x300. Max 5 mb.
                            </Flex>
                        </Skeleton>
                        <Flex
                            gap='2'
                            mb='4'
                            wrap='wrap'
                        >
                            <Skeleton loading={isLoading}>
                                <Button
                                    onClick={() => input.current?.click()}
                                    size='sm'
                                    color='gray'
                                >
                                    upload from gallery
                                </Button>
                            </Skeleton>
                            <Skeleton loading={isLoading}>
                                <Button
                                    size='sm'
                                    color='gray'
                                >
                                    NFT from wallet
                                </Button>
                            </Skeleton>
                        </Flex>
                        {
                            error && <Flex
                                align='center'
                                gap='3'
                            >
                                <RiAlertFill color="red" />
                                <Text as='p' color="red">
                                    {(error as AxiosError<{ avatar: string }>).response?.data.avatar}
                                </Text>
                            </Flex>
                        }
                    </Box>
                </Flex>

                <input onChange={handleChange} ref={input} name="avatar" type="file" hidden/>
                <input ref={submit} type='submit' hidden />

            </form>
        </Card.Body>
        <Card.Bottom>
            {
                !!input.current?.files?.length &&
                <Button
                    onClick={() => submit.current?.click()}
                    color='gray'
                    wideWidth
                    hoverToWhite
                >
                    {isPending ? 'Saving...' : 'Save'}
                </Button>
            }
        </Card.Bottom>
    </Card.Root>
}
