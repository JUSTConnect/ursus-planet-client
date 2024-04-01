'use client'
import Image, { StaticImageData } from 'next/image'
import { useSearchParams } from 'next/navigation';
import {
    Box,
    Flex,
    Text
} from '@radix-ui/themes';

import { useMetaMask } from '@/entities/web3/hooks/useMetamask';
import { useAuth } from '@/entities/auth/api';
import { useToast } from '@/shared/ui/Toast';

import css from './index.module.scss'
import iconPolygon from './img/icon-polygon.svg'
import iconBnb from './img/icon-bnb.svg'
import iconArb from './img/icon-arb.svg'


export interface IItem {
    figure: StaticImageData
    name: string
    detected?: boolean
    setModalActive?: (_: boolean) => void
}


export default function Item(props: IItem) {
    const searchParams = useSearchParams()
    const { fire } = useToast()
    const { hasProvider, isConnecting, connectMetaMask } = useMetaMask()
    const { mutateAsync } = useAuth()

    const connect = async () => {
        const connected = await connectMetaMask()
        console.log(connected)
        connected && props.setModalActive && props.setModalActive(false)
        await mutateAsync({
            address: String(
                await window.ethereum?.request(
                    {"method": "eth_accounts"}
                )
            ),
            chain_id: String(
                await window.ethereum?.request(
                    {"method": "eth_chainId", params: []}
                )
            )
        })
        if (searchParams.get('as')==='project') {
            fire({type: 'error', text: "ООps..!! It looks like you don't have an approved project yet, but you were connected as a player."})
        }
    }


    return <Flex
        onClick={props.detected && hasProvider && connect || undefined}
        className={css.item}
        justify={'between'}
        gap='4'
        align='center'
    >
        <Image className={css.itemFigure} src={props.figure} alt='figure' />
        <Flex className={css.itemContent} justify='between'>
            <Box>
                <Box mb='3'>{props.name}</Box>
                <Flex gap='1'>
                    <Image className={css.itemIcon} src={iconPolygon} alt='icon' />
                    <Image className={css.itemIcon} src={iconBnb} alt='icon' />
                    <Image className={css.itemIcon} src={iconArb} alt='icon' />
                </Flex>
            </Box>
            {
                props.detected &&
                <Text color='gray'>
                    {hasProvider ? isConnecting ? 'Connecting...' : 'Detected' : 'Not detected'}
                </Text>
            }
        </Flex>
    </Flex>
}