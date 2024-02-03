'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { SiOpenlayers } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { useMetaMask } from '@/hooks/useMetamask';
import { useLogout } from '@/hooks/react-query/web3auth';
import { setModalWalletConnect } from '@/features/modal/modalSlice';
import Button from '@/components/core/Button';
import ButtonIcon from '@/components/core/Button/ButtonIcon';
import Dropdown from '@/components/core/Dropdown';

import css from './index.module.scss';
import iconWallet from './img/wallet.svg'
import iconAddPlaet from './img/icon-add-planet.svg'
import IconNotifications from './img/IconNotifications'

import DropdownNetwork from './DropdownNetwork'


export default function SectionRight() {
    const dispatch = useDispatch()
    const [chain, setChain] = useState('')
    const { isConnected, disconnectMetaMask } = useMetaMask()
    const { mutate } = useLogout()

    useEffect(() => {
        window.ethereum.on('chainChanged', () => {
            window.ethereum?.request({
                "method": "eth_chainId",
                "params": []
            }).then((res: string) => console.log(res))    
        });
    }, [])

    useEffect(() => {
        window.ethereum?.request({
            "method": "eth_chainId",
            "params": []
        }).then((res: string) => console.log(res))
    }, [chain])

    return <div className={css.headerSection}>
        {
            !!isConnected() &&
            <>
                <Button hovered className={css.buttonAddPlanet}>Add your planet</Button>
                <ButtonIcon className={css.buttonAddPlanetMobile}>
                    <Image
                        src={iconAddPlaet}
                        alt='icon'
                    />
                </ButtonIcon>
            </>
        }
        {!!isConnected() &&
            <Link href='#'>
                <div className={css.iconNotifications}>
                    <IconNotifications />
                </div>
            </Link>
        }
        {
            !!isConnected() &&
            <DropdownNetwork />
        }
        <Dropdown
            className={css.buttonWalletDropdown}
            classNameMenu={css.buttonWalletDropdownMenu}
            disabled={!isConnected()}
            items={[
                {
                    name: 'Wallet address',
                    icon: <FaWallet />
                },
                {
                    name: 'Logout test',
                    icon: <CgLogOut />,
                    onClick: () => { disconnectMetaMask(); mutate(null) }
                },
                {
                    name: 'Player',
                    icon: <FaPlay />,
                    link: '/account'
                },
                {
                    name: 'Project',
                    icon: <SiOpenlayers />
                },
                {
                    name: 'Settings',
                    icon: <IoMdSettings />,
                    link: '/settings/profile/'
                },
            ]}
        >
            <Button
                className={css.buttonWallet}
                onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                animated
                color='dark'
                iconStart={
                    !isConnected() &&
                    <FaWallet />
                }
                iconEnd={
                    !!isConnected() && <div className={css.buttonWalletArrow}>
                        <IoIosArrowDown />
                    </div>
                }
            >
                <div className={[css.buttonWalletText, !!isConnected() && css.buttonWalletTextActive].join(' ')}>
                    {!!isConnected() ? 'Connected' : 'Connect wallet'}
                </div>
            </Button>
            <ButtonIcon
                className={css.buttonWalletMobile}
                onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                color='dark'
            >
                <Image
                    className={css.buttonWalletIcon}
                    src={iconWallet}
                    alt='arrow' />
            </ButtonIcon>
        </Dropdown>
    </div>
}