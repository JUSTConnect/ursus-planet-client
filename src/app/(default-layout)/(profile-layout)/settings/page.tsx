'use client'

import { useState } from 'react'

import PanelPlayerTabs, {IPanelPlayerTab} from '@/components/PanelPlayerTabs'

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


export default function PageSettings() {
    const [activeTab, setActiveTab] = useState(tabs[1].value)

    return <>
        <PanelPlayerTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <div className={css.tabsContent}>
            {
                activeTab === 'profile' &&
                <TabProfile/>
            }
            {
                activeTab === 'socials' &&
                <TabSocials/>
            }
            {
                activeTab === 'wallets' &&
                <TabWallets/>
            }
            {
                activeTab === 'notifications' &&
                <TabNotifications/>
            }
        </div>
    </>
}