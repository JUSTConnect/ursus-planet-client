'use client'

import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import css from './index.module.scss'
import logo from './img/logo.svg'
import iconArrowDown from './img/arrow-down.svg'
import iconWallet from './img/wallet.svg'

import { RootState } from '@/store'
import { connect } from '@/features/tmp/tmpSlice'
import { setModalWalletConnect } from '@/features/modal/modalSlice'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'
import Container from '@/components/core/Container'
import Dropdown, {IItem} from '@/components/core/Dropdown'

import IconArrowDown from './img/IconArrowDown'
import IconNotifications from './img/notifications'
import IconBest from './img/IconBest'
import IconBrandKit from './img/IconBrandKit'
import IconCareers from './img/IconCareers'
import IconDocs from './img/IconDocs'
import IconFree from './img/IconFree'
import IconLogout from './img/IconLogout'
import IconMain from './img/IconMain'
import IconMedia from './img/IconMedia'
import IconPlayers from './img/IconPlayers'
import IconProjects from './img/IconProjects'
import IconSettings from './img/IconSettings'
import IconSupport from './img/IconSupport'
import IconUpcoming from './img/IconUpcoming'
import IconYourDrops from './img/IconYourDrops'
import IconWallet from './img/IconWallet'

import Menu from './Menu'
import MenuMobile from './MenuMobile'


export interface IMenuItem
{
    name: string
    link?: string
    children?: IItem[]
}


const menu: IMenuItem[] = [
    {
        name: "Disvover",
        children: [
                {
                    name: 'Main',
                    value: 'main',
                    icon: <IconMain />
                },
                {
                    name: 'Free',
                    value: 'free',
                    icon: <IconFree />
                },
                {
                    name: 'Best',
                    value: 'best',
                    icon: <IconBest />
                },
                {
                    name: 'Upcoming',
                    value: 'upcoming',
                    icon: <IconUpcoming />
                },
                {
                    name: 'Your Drops',
                    value: 'your-drops',
                    icon: <IconYourDrops />
                }
        ]
    },
    {
        name: "Spaces"
    },
    {
        name: "Leaderboard",
        children: [
            {
                name: 'Projects',
                value: 'main',
                icon: <IconProjects />
            },
            {
                name: 'Players',
                value: 'free',
                icon: <IconPlayers />
            },
        ]
    },
    {
        name: "More",
        children: [
            {
                name: 'Docs',
                icon: <IconDocs />
            },
            {
                name: 'Careers',
                icon: <IconCareers />
            },
            {
                name: 'Brand kit',
                icon: <IconBrandKit />
            },
            {
                name: 'Media',
                icon: <IconMedia />
            },
            {
                name: 'Support',
                icon: <IconSupport />
            },
        ]
    }
]


export default function Header() {
    const dispatch = useDispatch()
    const connected = useSelector((state: RootState) => state.tmp.connected)

    return <header className={css.header}>
        <Container className={css.headerContainer}>
            <Link href='/'>
                <Image className={css.logo} src={logo} alt='logo' />
            </Link>
            <Menu items={menu}/>
            <div className={css.headerSection}>
                { connected &&
                    <Link href='#'>
                        <div className={css.iconNotifications}>
                            <IconNotifications />
                        </div>
                    </Link>
                }
                <Dropdown
                    className={css.buttonWalletDropdown}
                    classNameMenu={css.buttonWalletDropdownMenu}
                    disabled={!connected}
                    items={[
                        {
                            name: 'Wallet address',
                            icon: <IconWallet/>
                        },
                        {
                            name: 'Logout',
                            icon: <IconLogout/>
                        },
                        {
                            name: 'Player',
                            icon: <IconPlayers/>
                        },
                        {
                            name: 'Project',
                            icon: <IconProjects/>
                        },
                        {
                            name: 'Settings',
                            icon: <IconSettings/>,
                            link: '/profile'
                        },
                    ]}
                >
                    <Button
                        className={css.buttonWallet}
                        onClick={() => !connected && dispatch(setModalWalletConnect(true))}
                        animated
                        color='dark'
                        iconStart={
                            connected ?
                            <div className={css.buttonWalletArrow}>
                                <IconArrowDown/>
                            </div>
                            :
                            <Image
                                className={css.buttonWalletIcon}
                                src={iconWallet}
                                alt='arrow' />

                        }
                    >
                        <div className={css.buttonWalletText}>
                            { connected ? 'Connected' : 'Connect wallet' }
                        </div>
                    </Button>
                    <ButtonIcon
                        className={css.buttonWalletMobile}
                        onClick={() => !connected && dispatch(setModalWalletConnect(true))}
                        color='dark'
                    >
                        <Image
                            className={css.buttonWalletIcon}
                            src={iconWallet}
                            alt='arrow' />
                    </ButtonIcon>
                </Dropdown>
            </div>
        </Container>
        <MenuMobile items={menu}/>
    </header>
}