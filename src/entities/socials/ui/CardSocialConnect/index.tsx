import Image from "next/image"
import { useRouter } from "next/navigation";
import {
    Box,
    Text,
    Flex,
    Skeleton
} from "@radix-ui/themes"
import { IoSyncCircleSharp } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";


import Button from "@/shared/ui/Button"
import TextField from "@/shared/ui/TextField"
import Card from "@/shared/ui/Card"
import css from "./index.module.scss"


interface ICardSocialConnect {
    title: string
    figure: string
    icon: React.ReactNode
    handleDisconnect: CallableFunction
    value?: string | null
    loading: boolean
}

interface IWithLink extends ICardSocialConnect {
    handleConnect?: never
    handleConnectLink: string
}

interface IWithFunction extends ICardSocialConnect {
    handleConnect: CallableFunction
    handleConnectLink?: never
}


export default function CardSocialConnect(props: IWithLink | IWithFunction) {

    const router = useRouter()

    const handleConnect = () => {
        props.handleConnectLink &&
            router.push(props.handleConnectLink)
        props.handleConnect &&
            props.handleConnect()
    }

    return <Card.Root>
        <Card.Body>
            <Text
                as="p"
                align='center'
                size='8'
                mb='4'
            >
                <Skeleton loading={props.loading}>
                    {props.title}
                </Skeleton>
            </Text>
            <Text
                as="p"
                color="gray"
                mb='5'
            >
                <Skeleton loading={props.loading}>
                    Connect your <Text color="blue">{props.title}</Text> account to the application to be able to quickly complete tasks.
                </Skeleton>
            </Text>
            <Box my='5' className={css.figureWrapper}>
                <Image
                    className={css.figure}
                    src={props.figure}
                    alt='figure'
                />
            </Box>
            <Box className={css.bottom}>
                <Flex gap='2' justify='center'>
                    {
                        !props.value ?
                            <Skeleton loading={props.loading}>
                                <Button
                                    onClick={ handleConnect }
                                    hoverToWhite
                                    wideWidth
                                >
                                    {props.icon}
                                    Connect
                                </Button>
                            </Skeleton>
                            :
                            <>
                                <Skeleton loading={props.loading}>
                                    <TextField.Input
                                        readOnly
                                        defaultValue={props.value}
                                        fullWidth
                                    />
                                </Skeleton>
                                <Skeleton loading={props.loading}>
                                    <Button
                                        onClick={ handleConnect }
                                        icon
                                        hoverToWhite
                                    >
                                        <IoSyncCircleSharp />
                                    </Button>
                                </Skeleton>
                                <Skeleton loading={props.loading}>
                                    <Button
                                        onClick={() => props.handleDisconnect()}
                                        icon
                                        hoverToWhite
                                    >
                                        <FaDeleteLeft />
                                    </Button>
                                </Skeleton>
                            </>
                    }
                </Flex>
            </Box>
        </Card.Body>
    </Card.Root>
}