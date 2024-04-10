import { useEffect, useState } from 'react';
import Image from "next/image";
import { Text } from "@radix-ui/themes";
import { ethers } from "ethers";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal  } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

import { AptosWalletName, useWallet as aptosUseWallet } from "@manahippo/aptos-wallet-adapter"

import { useWallet as suiUseWallet, ConnectModal  } from "@suiet/wallet-kit";

import css from './index.module.scss'
import Button from "@/shared/ui/Button";
import IconAptos from '../CardWallet/img/IconAptos'
import iconEth from '../CardWallet/img/icon-eth.png'
import iconSol from '../CardWallet/img/icon-sol.png'
import iconSui from '../CardWallet/img/icon-sui.png'

type ConnectButtonProps = {
    addWallet: CallableFunction,
    isDeleted: boolean,
    disabled: boolean
}

export function ConnectEVMButton ({ addWallet, disabled }: ConnectButtonProps) {
    const connect = async () => {
        const accounts = await window.ethereum?.request({
            method: 'eth_requestAccounts',
        })
        if (accounts) addWallet({
            network: 'EVM Chain',
            address: accounts[0],
            active: true
        })
    }

    const addConnectedWallet = () => {
        if (window.ethereum && window.ethereum.isConnected()) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            provider.getSigner().then(signer => {
                signer.getAddress().then((addr: string) => {
                    addWallet({
                        network: 'EVM Chain',
                        address: addr.toLowerCase(),
                        active: true
                    })
                })
            });
        }
    }

    useEffect(() => {
        addConnectedWallet()
    }, [])

    return (
        <Button
            color='gray'
            onClick={connect}
            disabled={disabled}
            fullWidth
            hoverToWhite
        >
            <Image src={iconEth} alt='icon' />
            <Text>EVM</Text>
        </Button>
    )
}

export function ConnectSolButton ({ addWallet, isDeleted, disabled }: ConnectButtonProps) {
    const { setVisible } = useWalletModal();
    const { publicKey, connected, connecting, disconnect } = useWallet();

    useEffect(() => {
        addSolWallet()
    }, [connected])

    useEffect(() => {
        console.log('CONNECTING', connecting)
        addSolWallet()
    }, [])

    useEffect(() => {
        if (isDeleted) disconnect()
    }, [isDeleted])

    const addSolWallet = () => {
        if (!connected || !publicKey) return
        const address = publicKey.toBase58();
        addWallet({network: 'Solana', address, active: false})
    }

    const connect = () => {
        if (connected) return addSolWallet()
        setVisible(true)
    }

    return (
        <Button
            color='gray'
            onClick={connect}
            disabled={disabled}
            fullWidth
            hoverToWhite
        >
            <Image src={iconSol} alt='icon' />
            <Text>Solana</Text>
        </Button>
    )
}

export function ConnectAptosButton ({ addWallet, isDeleted, disabled }: ConnectButtonProps) {
    const { connect, connected, account, disconnect } = aptosUseWallet()

    useEffect(() => {
        addAptWallet()
    }, [connected])

    useEffect(() => {
        addAptWallet()
    }, [])

    useEffect(() => {
        if (isDeleted) disconnect()
    }, [isDeleted])

    const addAptWallet = () => {
        if (!connected || !account) return
        addWallet({network: 'Aptos', address: account.address, active: false})
    }

    return (
        <Button
            onClick={() => {connect(AptosWalletName)}}
            disabled={disabled}
            className={css.buttonAptos}
            fullWidth
            hoverToWhite
        >
            <IconAptos />
            Aptos
        </Button>
    )
}

export function ConnectSuiButton ({ addWallet, isDeleted, disabled }: ConnectButtonProps) {
    const { connected, account, disconnect } = suiUseWallet()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        addSuiWallet()
    }, [connected])

    useEffect(() => {
        addSuiWallet()
    }, [])

    useEffect(() => {
        if (isDeleted) disconnect()
    }, [isDeleted])

    const addSuiWallet = () => {
        if (!connected || !account) return
        addWallet({network: 'Sui', address: account.address, active: false})
    }

    return (
        <ConnectModal
            open={showModal}
            onOpenChange={(open) => setShowModal(open)}

        >
            <Button
                className={css.buttonAptos}
                disabled={disabled}
                fullWidth
                hoverToWhite
            >
                <Image src={iconSui} alt='icon' />
                Sui
            </Button>
        </ConnectModal>
    )
}
