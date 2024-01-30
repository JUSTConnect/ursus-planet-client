import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { SiOpenlayers } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";

import { useMetaMask } from '@/hooks/useMetamask';
import { useLogout } from '@/hooks/react-query/web3auth';
import { setModalWalletConnect } from '@/features/modal/modalSlice';
import Button from '@/components/core/Button';
import ButtonIcon from '@/components/core/Button/ButtonIcon';
import Dropdown from '@/components/core/Dropdown';

import css from './index.module.scss';
import iconWallet from './img/wallet.svg'
import iconAddPlaet from './img/icon-add-planet.svg'
import IconArrowDown from './img/IconArrowDown'
import IconNotifications from './img/IconNotifications'
import IconWallet from './img/IconWallet'
import IconLogout from './img/IconLogout'
import IconPlayers from './img/IconPlayers'
import IconProjects from './img/IconProjects'
import IconSettings from './img/IconSettings'

import DropdownNetwork from './DropdownNetwork'


export default function SectionRight() {
    const dispatch = useDispatch()
    const {isConnected, disconnectMetaMask} = useMetaMask()
    const {mutate} = useLogout()

    return <div className={css.headerSection}>
        {
            !!isConnected() &&
                <>
                    <Button className={css.buttonAddPlanet}>Add your planet</Button>
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
                <DropdownNetwork/>
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
                    onClick: () => {disconnectMetaMask(); mutate(null)}
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
                    !!isConnected() &&
                        <Image
                            className={css.buttonWalletIcon}
                            src={iconWallet}
                            alt='arrow' />

                }
                iconEnd={
                    !!isConnected() && <div className={css.buttonWalletArrow}>
                        <IconArrowDown />
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