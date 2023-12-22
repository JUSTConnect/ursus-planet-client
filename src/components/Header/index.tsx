'use client'

import { useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import css from './index.module.scss'
import logo from './img/logo.svg'
import iconNotifications from './img/notifications.svg'
import iconArrowDown from './img/arrow-down.svg'
import iconWallet from './img/wallet.svg'

import { setModalWalletConnect } from '@/features/modal/modalSlice'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'
import Container from '@/components/core/Container'
import Dropdown from '@/components/core/Dropdown'




export default function Header() {
    const dispatch = useDispatch()

    return <>
        <header className={css.header}>
            <Container className={css.headerContainer}>
                <Link href='/'>
                    <Image className={css.logo} src={logo} alt='logo' />
                </Link>
                <nav className={css.menu}>
                    <Dropdown
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
                    <Link className={css.menuItem} href='#'>
                        Spaces
                    </Link>
                    <Link className={css.menuItem} href='#'>
                        Leaderboard
                    </Link>
                    <Link className={css.menuItem} href='#'>
                        More
                        <Image
                            className={css.menuItemArrow}
                            src={iconArrowDown}
                            alt='arrow' />
                    </Link>
                </nav>
                <div className={css.headerSection}>
                    <Link href='#'>
                        <Image
                            className={css.iconNotifications}
                            src={iconNotifications}
                            alt='notifications'
                        />
                    </Link>
                    <Button
                        className={css.buttonWallet}
                        onClick={() => dispatch(setModalWalletConnect(true))}
                        animated
                        color='dark'
                        iconStart={
                            <Image
                                className={css.buttonWalletIcon}
                                src={iconWallet}
                                alt='arrow' />

                        }
                    >
                        <div className={css.buttonWalletText}>
                            Connect wallet
                        </div>
                    </Button>
                    <ButtonIcon
                        className={css.buttonWalletMobile}
                        onClick={() => dispatch(setModalWalletConnect(true))}
                        color='dark'
                    >
                        <Image
                            className={css.buttonWalletIcon}
                            src={iconWallet}
                            alt='arrow' />
                    </ButtonIcon>
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