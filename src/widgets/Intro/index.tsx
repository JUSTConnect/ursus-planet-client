import Image from "next/image"
import {
    Box,
    Heading,
    Flex
} from "@radix-ui/themes"
import { SiOpenlayers } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";

import Button from "@/shared/ui/Button"

import Header from "@/widgets/Header"
import css from './index.module.scss'
import figure from './img/figure.svg'
import bg from './img/bg.jpg'
import bgRelief from './img/bg-relief.svg'


export default function Intro() {

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
                            <Button
                                className={css.button}
                                color="primary"
                                size='lg'
                                fullWidth
                            >
                                <FaPlay/>
                                Player
                            </Button>
                            <Button
                                className={css.button}
                                color="gray"
                                size='lg'
                                fullWidth
                                disabled
                            >
                                <SiOpenlayers/>
                                Project
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </>
}