import Link from 'next/link'
import Image from 'next/image'

import css from './index.module.scss'
import logo from './img/logo.svg'
import lust from './img/lust.svg'
import lustMd from './img/lust-md.svg'
import lustSm from './img/lust-sm.svg'

import Container from '@/components/core/Container'


export default function Footer() {
    return <footer className={css.footer}>
        <Container>
            <div className={css.footerTop}>
                <div className={css.brief}>
                    <Link href="/">
                        <Image className={css.logo} src={logo} alt='logo' />
                    </Link>
                    <div className={css.briefText}>
                        Ursas Planet is the first gamefi raffle platform for building Web3 community. Noname has propelled the growth of Polygon,Arbitrum, BSC, zkSync, Solana, Aptos and other more popular networks. Noname changed game and get oppatunity for building earn all member of market.
                    </div>
                </div>
                <nav className={css.links}>
                    <div className={css.linksSection}>
                        <div className={css.linksHeading}>
                            Planet
                        </div>
                        <Link className={css.linksLink} href='#'>Discover</Link>
                        <Link className={[css.linksLink, css.linksLinkDisabled].join(' ')} href='#'>Universe</Link>
                        <Link className={[css.linksLink, css.linksLinkDisabled].join(' ')} href='#'>Leaderboard</Link>
                    </div>
                    <div className={css.linksSection}>
                        <div className={css.linksHeading}>
                            About
                        </div>
                        <Link className={css.linksLink} href='https://docs-project.ursasplanet.com'>Docs project</Link>
                        <Link className={css.linksLink} href='https://docs.ursasplanet.com'>Docs platform</Link>
                        <Link className={css.linksLink} href='#'>Brand Kit</Link>
                    </div>
                    <div className={css.linksSection}>
                        <div className={css.linksHeading}>
                            Community
                        </div>
                        <Link className={css.linksLink} href='https://medium.com/@TEDDY_Arrr'>Medium</Link>
                        <Link className={css.linksLink} href='https://twitter.com/UrsasPlanet'>Twitter</Link>
                        <Link className={css.linksLink} href='https://t.me/ursasplanet'>Telegram</Link>
                        <Link className={css.linksLink} href='https://discord.gg/ursas'>Discord</Link>
                    </div>
                    <div className={css.linksSection}>
                        <div className={css.linksHeading}>
                            Support
                        </div>
                        <Link className={css.linksLink} href='#'>Help</Link>
                        <Link className={css.linksLink} href='#'>Universe</Link>
                        <Link className={css.linksLink} href='#'>Support</Link>
                    </div>
                </nav>
            </div>
            <div className={css.footerBottom}>
                <div>
                    <Link href='#'>
                        Terms of Service
                    </Link>&nbsp;&nbsp;&nbsp;
                    <Link href='#'>
                        Privacy Policy
                    </Link>
                </div>
                Made by ju7tconnect © 2023
            </div>
        </Container>
        <Image className={css.lust} src={lust} alt='lust' />
        <Image className={css.lustMd} src={lustMd} alt='lust' />
        <Image className={css.lustSm} src={lustSm} alt='lust' />
    </footer>
}