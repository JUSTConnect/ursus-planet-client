import Image from "next/image";
import { Text, Grid, Flex, Box, ScrollArea } from "@radix-ui/themes";
import { IoIosAlarm } from "react-icons/io";

import CardWallet from "@/entities/wallets/ui/CardWallet";
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button";

import IconAptos from './img/IconAptos'
import iconEth from './img/icon-eth.png'
import iconSol from './img/icon-sol.png'
import iconSui from './img/icon-sui.png'
import css from './index.module.scss'


export default function CardWalletsPlayerUpdate() {

    return <Card.Root tabulated value="player">
        <Card.Head>
            <IoIosAlarm /> Player
        </Card.Head>
        <Card.Body>
            <Flex direction='column' className={css.wrapper}>
                <Box>
                    <Text as="p" size='4' mb='5'>Add network</Text>
                    <Grid
                        columns={{
                            initial: '2',
                            sm: '3',
                            lg: '4'
                        }}
                        gap='3'
                        mb='5'
                    >
                        <Button
                            color='gray'
                            fullWidth
                            hoverToWhite
                        >
                            <Image src={iconEth} alt='icon' />
                            EVM
                        </Button>
                        <Button
                            color='gray'
                            fullWidth
                            hoverToWhite
                            disabled
                        >
                            <Image src={iconSol} alt='icon' />
                            Solana
                        </Button>
                        <Button
                            className={css.buttonAptos}
                            fullWidth
                            hoverToWhite
                            disabled
                        >
                            <IconAptos />
                            Aptos
                        </Button>
                        <Button
                            color='gray'
                            fullWidth
                            hoverToWhite
                            disabled
                        >
                            <Image src={iconSui} alt='icon' />
                            Sui
                        </Button>
                    </Grid>
                </Box>
                <Box>
                    <Text as="p" size='4' mb='5'>Wallet list</Text>
                </Box>
                <Box className={css.cards}>
                    <ScrollArea>
                        <Flex direction='column' gap='3'>
                            {
                                Array.from(Array(10)).map((_, index)=>
                                    <Box
                                        key={index}
                                        pr='4'
                                    >
                                        <CardWallet/>
                                    </Box>
                                )
                            }
                        </Flex>
                    </ScrollArea>
                </Box>
            </Flex>
        </Card.Body>
    </Card.Root >
}
