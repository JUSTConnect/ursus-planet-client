'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, Flex, Badge, Switch } from '@radix-ui/themes'
import { MdCopyAll, MdDelete } from "react-icons/md";
import c from 'classnames';
import { useToast } from "@/shared/ui/Toast"

import Card from '@/shared/ui/Card'
import Button from '@/shared/ui/Button'

import css from './index.module.scss'
import ethIcon from './img/icon-eth.png'
import solIcon from './img/icon-sol.png'
import arbIcon from './img/icon-arb.png'
import polyIcon from './img/icon-poly.png'
import aptosIcon from './img/icon-aptos.png'
import suiIcon from './img/icon-sui.png'


interface IChainItem
{
    network: string,
    address: string,
    deleteWallet: CallableFunction,
    active?: boolean
}

const supportedChainsIcons: { [key: string]: StaticImageData[] } = {
    'EVM Chain': [ethIcon, arbIcon, polyIcon],
    'Solana': [solIcon],
    'Aptos': [aptosIcon],
    'Sui': [suiIcon]
}


export default function CardWallet(props: IChainItem) {
    const [active, setActive] = useState(!!props.active)
    const { fire } = useToast()

    const copyAddress = () => {
        navigator.clipboard.writeText(props.address)
        fire({'text': 'Copied to clipboard'})
    }

    const deleteWallet = () => {
        props.deleteWallet(props.network, props.address)
    }

    return <Card.Root className={c(css.root, !active && css.rootInactive)}>
        <Card.Body>
            <Flex justify='between' align='start' mb='5'>
                <Text>
                    User name
                </Text>
                <Flex align='center' gap='3'>
                    <Text>{props.network}</Text>
                    <Box className={css.badge}>
                        {
                            active ?
                                <Badge color='green'>Active</Badge>
                            :
                                <Badge color='red'>Inactive</Badge>
                        }
                    </Box>
                    <Switch defaultChecked={!!props.active} onCheckedChange={ e => setActive(e) }/>
                </Flex>
            </Flex>
            <Flex justify='between' align='end'>
                <Flex>
                    {
                        supportedChainsIcons[props.network].map((icon, index) =>
                            <Box
                                key={index}
                                className={css.icon}
                            >
                                <Image
                                    src={icon}
                                    alt='icon'
                                    width={20}
                                    height={20}
                                />
                            </Box>
                        )
                    }
                </Flex>
                <Flex align='center' gap='2'>
                    <Box className={css.hash}>
                        <Text className={css.hashStart}>{props.address}</Text>
                    </Box>
                    <Button icon size='sm'>
                        <MdCopyAll onClick={copyAddress} />
                    </Button>
                    <Button icon size='sm'>
                        <MdDelete onClick={deleteWallet} />
                    </Button>
                </Flex>
            </Flex>        
        </Card.Body>
    </Card.Root>
}