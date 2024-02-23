'use client'

import { useRouter } from 'next/navigation'

import protectedPage from '@/hocs/protectedPage'
import PanelPlayerTabs, { IPanelPlayerTab } from '@/components/PanelPlayerTabs'

import css from './index.module.scss'
import IconProfile from './img/Profile'
import IconSocials from './img/Socials'
import IconWallets from './img/Wallets'
import IconNotifications from './img/Notifications'

import TabProfile from './TabProfile'
import TabSocials from './TabSocials'
import TabWallets from './TabWallets'
import TabNotifications from './TabNotifications'


const tabs: IPanelPlayerTab[] = [
    {
        icon: <IconProfile />,
        name: 'Profile',
        value: 'profile'
    },
    {
        icon: <IconSocials />,
        name: 'Socials',
        value: 'socials'
    },
    {
        icon: <IconWallets />,
        name: 'Wallets',
        value: 'wallets'
    },
    {
        icon: <IconNotifications />,
        name: 'Notifications',
        value: 'notifications'
    }
]


function SettingsPage({ params }: { params: { tab: string } }) {
    const router = useRouter()

    return <>
        <PanelPlayerTabs
            tabs={tabs}
            activeTab={params.tab}
            setActiveTab={(name) => router.push(name)}
        />
        <div className={css.tabsContent}>
            {
                params.tab === 'profile' &&
                <TabProfile />
            }
            {
                params.tab === 'socials' &&
                <TabSocials />
            }
            {
                params.tab === 'wallets' &&
                <TabWallets />
            }
            {
                params.tab === 'notifications' &&
                <TabNotifications />
            }
        </div>
    </>
}


export default protectedPage(SettingsPage)