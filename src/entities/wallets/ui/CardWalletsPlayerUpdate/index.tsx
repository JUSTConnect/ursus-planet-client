'use client';

import { useState } from 'react';
import { Text, Grid, Flex, Box, ScrollArea } from "@radix-ui/themes";
import { IoIosAlarm } from "react-icons/io";

import CardWallet from "@/entities/wallets/ui/CardWallet";
import Card from "@/shared/ui/Card"
import {
    ConnectSolButton,
    ConnectEVMButton,
    ConnectAptosButton,
    ConnectSuiButton
} from '@/entities/wallets/ui/CardWalletConnectButton';

import css from './index.module.scss'


type Wallet = {
    network: string,
    address: string,
    active: boolean
}

export default function CardWalletsPlayerUpdate() {
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [disableAllConnectBtns, setDisableAllConnectBtns] = useState(false)
    const [isSolanaDeleted, setIsSolanaDeleted] = useState(false)
    const [isAptosDeleted, setIsAptosDeleted] = useState(false)
    const [isSuiDeleted, setIsSuiDeleted] = useState(false)

    const addWallet = (wallet: Wallet) => {
        console.log(wallet)
        if (wallets.find(w => w.address == wallet.address)) return
        const newWallets = [...wallets, wallet]
        setWallets(newWallets)
        // saveDbWallet(wallet.address)
        setDeletedWalletStatus(wallet.network, false)
        console.log(wallets)
        if (wallets.length === 4) setDisableAllConnectBtns(true)
    }

    const deleteWallet = (network: string, address: string) => {
        if (wallets.length <= 1) return
        const newWallets = wallets.filter(a => a.address !== address)
        setWallets(newWallets)
        // deleteDbWallet(address)
        setDeletedWalletStatus(network, true)
        setDisableAllConnectBtns(false)
    }

    const setDeletedWalletStatus = (network: string, value: boolean) => {
        switch (network) {
            case 'Solana':
                setIsSolanaDeleted(value)
            case 'Aptos':
                setIsAptosDeleted(value)
            case 'Sui':
                setIsSuiDeleted(value)
        }
    }

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
                        <ConnectEVMButton addWallet={addWallet} isDeleted={false}
                            disabled={disableAllConnectBtns} />
                        <ConnectSolButton addWallet={addWallet} isDeleted={isSolanaDeleted}
                            disabled={disableAllConnectBtns} />
                        <ConnectAptosButton addWallet={addWallet} isDeleted={isAptosDeleted}
                            disabled={disableAllConnectBtns} />
                        <ConnectSuiButton addWallet={addWallet} isDeleted={isSuiDeleted}
                            disabled={disableAllConnectBtns} />
                    </Grid>
                </Box>
                <Box>
                    <Text as="p" size='4' mb='5'>Wallet list</Text>
                </Box>
                <Box className={css.cards}>
                    <ScrollArea>
                        <Flex direction='column' gap='3'>
                            {
                                wallets.map((wallet, index)=>
                                    <Box
                                        key={index}
                                        pr='4'
                                    >
                                        <CardWallet
                                            network={wallet.network}
                                            address={wallet.address}
                                            active={wallets.length === 1 ? true : wallet.active}
                                            deleteWallet={deleteWallet}
                                        />
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
