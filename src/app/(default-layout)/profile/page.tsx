'use client'

import { useState } from "react"

import Container from "@/components/core/Container"

import css from './index.module.scss'
import Top from './Top'
import TabsNavigation from './TabsNavigation'
import TabProfile from "./TabProfile"
import TabSocials from './TabSocials'
import TabWallets from './TabWallets'


export type TabValue = 'profile' | 'socials' | 'wallets' | 'notifications'


export default function Profile() {
    const [tab, setTab] = useState<TabValue>('wallets')

    return <>
        <Container>
            <Top/>
        </Container>
        <div className={css.tabs}>
            <TabsNavigation setTab={setTab} tab={tab}/>
            { tab === 'profile' && <TabProfile/> }
            { tab === 'socials' && <TabSocials/> }
            { tab === 'wallets' && <TabWallets/> }
        </div>
    </>
}