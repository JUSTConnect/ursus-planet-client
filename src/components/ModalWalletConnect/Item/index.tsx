'use client'

import Image, { StaticImageData } from 'next/image'

import { useMetaMask } from '@/hooks/useMetamask';
import { useAuth } from '@/hooks/react-query/web3auth';
import css from './index.module.scss'
import iconPolygon from './img/icon-polygon.svg'
import iconBnb from './img/icon-bnb.svg'
import iconArb from './img/icon-arb.svg'


export interface IItem {
    figure: StaticImageData
    name: string
    detected?: boolean
    setModalActive?: (value: boolean) => void
}


export default function Item(props: IItem) {
    const { hasProvider, isConnecting, connectMetaMask } = useMetaMask()
    const { mutateAsync } = useAuth()

    const connect = async () => {
        const connected = await connectMetaMask()

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
    }


    return <div
        className={css.item}
        onClick={props.detected && hasProvider && connect || undefined}
    >
        <Image className={css.itemFigure} src={props.figure} alt='figure' />
        <div className={css.itemContent}>
            <div>
                <div className={css.itemTitle}>{props.name}</div>
                <div className={css.itemIcons}>
                    {/* <Image className={css.itemIcon} src={icon1} alt='icon' /> */}
                    <Image className={css.itemIcon} src={iconPolygon} alt='icon' />
                    <Image className={css.itemIcon} src={iconBnb} alt='icon' />
                    <Image className={css.itemIcon} src={iconArb} alt='icon' />
                </div>
            </div>
            {
                props.detected &&
                <div className={css.itemDetected}>
                    {hasProvider ? isConnecting ? 'Connecting...' : 'Detected' : 'Not detected'}
                </div>
            }
        </div>
    </div>
}