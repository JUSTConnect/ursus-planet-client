'use client'

import Image, { StaticImageData } from 'next/image'
import { useDispatch } from 'react-redux';
import { useSDK } from '@metamask/sdk-react';

import { RootState } from '@/store';
import { setAccounts } from '@/features/web3/web3Slice';

import css from './index.module.scss'
import icon1 from './img/icon-1.png'
import icon2 from './img/icon-2.png'


export interface IItem {
    figure: StaticImageData
    name: string
    detected?: boolean
    setModalActive?: (value: boolean) => void
}


export default function Item(props: IItem) {
    const dispatch = useDispatch()
    const { sdk, connected, connecting, provider, chainId } = useSDK();

    const connect = async () => {
        try {
            const accounts = await sdk?.connect() as string[]

            dispatch(setAccounts(accounts.map(account => Object({address: account, chainId: chainId}))))
            props.setModalActive && props.setModalActive(false)
        } catch (err) {
            console.warn(`failed to connect..`, err)
        }
    };


    return <div
        className={css.item}
        onClick={ props.detected && connect || undefined }
    >
        <Image className={css.itemFigure} src={props.figure} alt='figure' />
        <div className={css.itemContent}>
            <div>
                <div className={css.itemTitle}>{props.name}</div>
                <div className={css.itemIcons}>
                    <Image className={css.itemIcon} src={icon1} alt='icon' />
                    <Image className={css.itemIcon} src={icon2} alt='icon' />
                </div>
            </div>
            {
                props.detected &&
                <div className={css.itemDetected}>Detected</div>
            }
        </div>
    </div>
}