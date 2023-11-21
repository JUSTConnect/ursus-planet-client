import Image from 'next/image'
import Link from 'next/link'

import css from './index.module.scss'
import logo from './img/logo.svg'
import iconNotifications from './img/notifications.svg'
import iconArrowDown from './img/arrow-down.svg'
import iconWallet from './img/wallet.svg'

import Button from '@/components/core/Button'
import Container from '@/components/core/Container'


export default function Header() {
    return <header className={css.header}>
        <Container className={css.headerContainer}>
            <Image className={css.logo} src={logo} alt='logo' />
            <nav className={css.menu}>
                <Link className={css.menuItem} href='#'>
                    Discover
                    <Image
                        className={css.menuItemArrow}
                        src={iconArrowDown}
                        alt='arrow' />
                </Link>
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
                    animated
                    color='dark'
                >
                    <div className={css.buttonWalletText}>
                        Connect wallet
                    </div>
                    <Image
                        className={css.buttonWalletIcon}
                        src={iconWallet}
                        alt='arrow' />
                </Button>
            </div>
        </Container>
        <Container className={css.menuBottom}>
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
}