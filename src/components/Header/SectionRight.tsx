import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

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
                    icon: <IconWallet />
                },
                {
                    name: 'Logout test',
                    icon: <IconLogout />,
                    onClick: () => {disconnectMetaMask(); mutate(null)}
                },
                {
                    name: 'Player',
                    icon: <IconPlayers />,
                    link: '/account'
                },
                {
                    name: 'Project',
                    icon: <IconProjects />
                },
                {
                    name: 'Settings',
                    icon: <IconSettings />,
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