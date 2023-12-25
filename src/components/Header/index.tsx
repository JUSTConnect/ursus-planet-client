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
import Dropdown from '@/components/core/Dropdown'

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



export default function Header() {
    const dispatch = useDispatch()
    const connected = useSelector((state: RootState) => state.tmp.connected)

    return <>
        <header className={css.header}>
            <Container className={css.headerContainer}>
                <Link href='/'>
                    <Image className={css.logo} src={logo} alt='logo' />
                </Link>
                <nav className={css.menu}>
                    <Dropdown
                        hover
                        items={
                            [
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
                        }
                    >
                        <Link href='#' className={css.menuItem}>
                            Discover
                            <div className={css.menuItemArrow}>
                                <IconArrowDown />
                            </div>
                        </Link>
                    </Dropdown>
                    <Link className={css.menuItem} href='#'>
                        Spaces
                    </Link>
                    <Dropdown
                        hover
                        items={
                            [
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
                        }
                    >
                        <Link className={css.menuItem} href='#'>
                            Leaderboard
                            <div className={css.menuItemArrow}>
                                <IconArrowDown />
                            </div>
                        </Link>
                    </Dropdown>
                    <Dropdown
                        hover
                        items={
                            [
                                {
                                    name: 'Docs',
                                    icon: <IconDocs/>
                                },
                                {
                                    name: 'Careers',
                                    icon: <IconCareers/>
                                },
                                {
                                    name: 'Brand kit',
                                    icon: <IconBrandKit/>
                                },
                                {
                                    name: 'Media',
                                    icon: <IconMedia/>
                                },
                                {
                                    name: 'Support',
                                    icon: <IconSupport/>
                                },
                            ]
                        }
                    >
                        <Link className={css.menuItem} href='#'>
                            More
                            <div className={css.menuItemArrow}>
                                <IconArrowDown />
                            </div>
                        </Link>
                    </Dropdown>
                </nav>
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
                                icon: <IconSettings/>
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
            <Container className={css.menuBottom}>
                <Dropdown
                    className={css.menuBottomItem}
                    items={
                        [
                            {
                                name: 'Main',
                                value: 'main'
                            },
                            {
                                name: 'Free',
                                value: 'free'
                            },
                            {
                                name: 'Best',
                                value: 'best'
                            },
                            {
                                name: 'Upcoming',
                                value: 'upcoming'
                            },
                            {
                                name: 'Your Drops',
                                value: 'your-drops'
                            }
                        ]
                    }
                >
                    <Link href='#' className={css.menuItem}>
                        Discover
                        <Image
                            className={css.menuItemArrow}
                            src={iconArrowDown}
                            alt='arrow' />
                    </Link>
                </Dropdown>
                <Link className={css.menuBottomItem} href='#'>
                    Discover
                    <Image
                        className={css.menuBottomItemArrow}
                        src={iconArrowDown}
                        alt='arrow' />
                </Link>
                <Link className={css.menuBottomItem} href='#'>
                    Spaces
                </Link>
                <Link className={css.menuBottomItem} href='#'>
                    Leaderboard
                </Link>
                <Link className={css.menuBottomItem} href='#'>
                    More
                    <Image
                        className={css.menuBottomItemArrow}
                        src={iconArrowDown}
                        alt='arrow' />
                </Link>
            </Container>

        </header>
    </>
}