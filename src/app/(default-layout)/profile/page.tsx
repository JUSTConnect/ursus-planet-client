'use client'

import { useState } from "react"

import Container from "@/components/core/Container"

import css from './index.module.scss'
import IconProfile from './img/Profile'
import IconSocials from './img/Socials'
import IconWallets from './img/Wallets'
import IconNotifications from './img/Notifications'

import {Tab} from './TabsNavigation'
import Top from './Top'
import TabsNavigation from './TabsNavigation'
import TabProfile from "./TabProfile"
import TabSocials from './TabSocials'
import TabWallets from './TabWallets'
import TabNotifications from './TabNotifications'



export type TabValue = 'profile' | 'socials' | 'wallets' | 'notifications'


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

export default function Profile() {
    const [tab, setTab] = useState('wallets')

    return <>
        <Container>
            <Top tab={tab}/>
        </Container>
        <div className={css.tabs}>
            <TabsNavigation
                setTab={setTab}
                tab={tab}
                tabs={tabs}
            />
            { tab === 'profile' && <TabProfile/> }
            { tab === 'socials' && <TabSocials/> }
            { tab === 'wallets' && <TabWallets/> }
            { tab === 'notifications' && <TabNotifications/> }
        </div>
    </>
}