import Image from 'next/image'

import type {TabValue} from '../page'
import css from './index.module.scss'
import IconProfile from './icons/Profile'
import IconSocials from './icons/Socials'
import IconWallets from './icons/Wallets'
import IconNotifications from './icons/Notifications'

import Container from '@/components/core/Container'
import Scroller from '@/components/core/Scroller'


interface Props {
    tab: TabValue
    setTab: (tab: TabValue) => void
}

type Tab = {
    icon: React.ReactNode
    name: string
    value: TabValue
}

const tabs: Tab[] = [
    {
        icon: <IconProfile/>,
        name: 'Profile',
        value: 'profile'
    },
    {
        icon: <IconSocials/>,
        name: 'Socials',
        value: 'socials'
    },
    {
        icon: <IconWallets/>,
        name: 'Wallets',
        value: 'wallets'
    },
    {
        icon: <IconNotifications/>,
        name: 'Notifications',
        value: 'notifications'
    }
]


export default function TabsNavigation(props: Props) {
    return <Scroller>
        <Container className={css.navigation}>
            {
                tabs.map(tab =>
                    <div 
                        key={tab.value}
                        className={[
                            css.item,
                            props.tab === tab.value && css.itemActive
                        ].join(' ')}
                        onClick={ () => props.setTab(tab.value) }
                    >
                        { tab.icon }
                        { tab.name }
                    </div>
                )
            }
        </Container>
    </Scroller>
}