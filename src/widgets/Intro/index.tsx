import Image from "next/image"
import { useRouter } from "next/navigation";
import { useIsMounted } from 'usehooks-ts'
import { useDispatch } from "react-redux";
import {
    Box,
    Heading,
    Flex,
    Skeleton
} from "@radix-ui/themes"
import { SiOpenlayers } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";

import { useMetaMask } from "@/entities/web3/hooks/useMetamask";
import { setModalWalletConnect } from "@/features/modal/modalSlice";
import Header from "@/widgets/Header"
import Button from "@/shared/ui/Button"

import css from './index.module.scss'
import figure from './img/figure.svg'
import bg from './img/bg.jpg'
import bgRelief from './img/bg-relief.svg'


export default function Intro() {

    const router = useRouter()
    const dispatch = useDispatch()
    const { isConnected } = useMetaMask()
    const isMounted = useIsMounted()

    const handleConnect = (as: 'player'|'project') => {
        router.replace(`.?as=${as}`)
        !isConnected() && dispatch(setModalWalletConnect(true))
    }

    return <>
        <Flex direction='column' justify='between' className={css.container}>
            <Image
                className={css.bg}
                src={bg}
                alt='bg'
            />
            <Header/>
            <Box pt='9'>
                <Heading
                    size='9'
                    align='center'
                    mb={{
                        initial: '4',
                        sm: '9'
                    }}
                >
                    Who are you?
                </Heading>
                <Box className={css.figureWrapperStatic}>
                    <Flex justify='center' className={css.figureWrapper}>
                        <Image
                            className={css.bgRelief}
                            src={bgRelief}
                            alt='bg'
                        />
                        <Image
                            className={css.figure}
                            src={figure}
                            alt='figure'
                        />
                        <Flex justify='center' gap='4' className={css.buttons}>
                            <Skeleton loading={!isMounted()}>
                                <Button
                                    onClick={ () => handleConnect('player') }
                                    className={css.button}
                                    color={ isConnected() ? 'primary' : undefined}
                                    size='lg'
                                    fullWidth
                                >
                                    <FaPlay/>
                                    Player
                                </Button>
                            </Skeleton>
                            <Skeleton loading={!isMounted()}>
                                <Button
                                    onClick={ ()=> handleConnect('project') }
                                    className={css.button}
                                    color="gray"
                                    size='lg'
                                    fullWidth
                                    disabled={ isConnected() }
                                >
                                    <SiOpenlayers/>
                                    Project
                                </Button>
                            </Skeleton>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </>
}