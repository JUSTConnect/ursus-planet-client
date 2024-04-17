'use client'
import {
    FormEvent,
    useRef,
    useState,
    useEffect
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
import { useSelector } from "react-redux";

import { useMe, useMeUpdate } from "@/entities/users/api"
import ModalSetNFTAsAvatar from "@/entities/web3/ui/ModalSetNFTAsAvatar"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"
import Avatar from "@/shared/ui/Avatar"
import { RootState } from '@/store'

import css from './index.module.scss'
import { NFT } from '@/entities/users/model'


export default function CardMeUpdateAvatar() {
    const { accounts } = useSelector((state: RootState) => state.web3)
    const [modalNft, setModalNft] = useState(false)
    const {fire} = useToast()

    const [avatar, setAvatar] = useState('')
    const [selectedNFT, setSelectedNFT] = useState<NFT | null>()

    const { data, isLoading } = useMe()
    const { mutateAsync, isPending, error } = useMeUpdate()

    const input = useRef<HTMLInputElement>(null)
    const submit = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (selectedNFT) setAvatar(selectedNFT.image)
    }, [selectedNFT])

    const handleChange = () => {
        const avatar = input.current?.files?.[0]
        avatar && setAvatar(URL.createObjectURL(avatar))
        setSelectedNFT(null)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        if (selectedNFT && selectedNFT.contract) {
            formData.append('contract', selectedNFT.contract)
            formData.append('tokenId', selectedNFT.tokenId)
        }
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
                                    hoverToWhite
                                >
                                    upload from gallery
                                </Button>
                            </Skeleton>
                            <Skeleton loading={isLoading}>
                                <Button
                                    onClick={ () => setModalNft(true) }
                                    size='sm'
                                    color='gray'
                                    hoverToWhite
                                >
                                    NFT from your wallet
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
                avatar &&
                <Button
                    onClick={() => submit.current?.click()}
                    color='gray'
                    wideWidth
                    hoverToWhite
                    disabled={isPending}
                >
                    {isPending ? 'Saving...' : 'Save'}
                </Button>
            }
        </Card.Bottom>
        <ModalSetNFTAsAvatar active={modalNft} setActive={setModalNft} selectNFT={setSelectedNFT} address={accounts && accounts[0] ? accounts[0].address : ''} />
    </Card.Root>
}
