import Image from 'next/image'

import type {TabValue} from '../page'
import css from './index.module.scss'
import IconProfile from './icons/Profile'
import IconSocials from './icons/Socials'
import IconWallets from './icons/Wallets'
import IconNotifications from './icons/Notifications'

import Container from '@/components/core/Container'
import Scroller from '@/components/core/Scroller'
import Button from '@/components/core/Button'


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
                    <div key={tab.value}>
                        <Button
                            variant={ props.tab !== tab.value ? 'blank' : 'regular' }
                            color={ props.tab === tab.value ? 'gray' : 'primary' }
                            className={[
                                css.button,
                                props.tab === tab.value && css.buttonActive
                            ].join(' ')}
                            onClick={ () => props.setTab(tab.value) }
                            iconStart={ tab.icon }
                        >
                            { tab.name }
                        </Button>
                    </div>
                )
            }
        </Container>
    </Scroller>
}