import Image from 'next/image'

import css from './index.module.scss'
import IconProfile from './icons/Profile'
import IconSocials from './icons/Socials'
import IconWallets from './icons/Wallets'
import IconNotifications from './icons/Notifications'

import Container from '@/components/core/Container'
import Scroller from '@/components/core/Scroller'


export default function TabsNavigation() {
    return <Scroller><Container className={css.navigation}>
        <div className={[css.item, css.itemActive].join(' ')}>
            <IconProfile />
            Profile
        </div>
        <div className={css.item}>
            <IconSocials />
            Socials
        </div>
        <div className={css.item}>
            <IconWallets />
            Wallets
        </div>
        <div className={css.item}>
            <IconNotifications />
            Notifications
        </div>
    </Container>
    </Scroller>
}