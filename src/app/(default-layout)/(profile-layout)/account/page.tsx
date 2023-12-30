'use client'

import { useState } from "react"

import PanelPlayerTabs, {IPanelPlayerTab} from "@/components/PanelPlayerTabs"

import css from './index.module.scss'
import IconGames from './img/IconGames'
import IconStatistics from './img/IconStatistics'

import TabGames from './TabGames'
import TabStatistics from './TabStatistics'


export type TabValue = 'profile' | 'socials' | 'wallets' | 'notifications'


const tabs: IPanelPlayerTab[] = [
    {
        name: 'Games',
        value: 'games',
        icon: <IconGames/>
    },
    {
        name: 'Statistics',
        value: 'statistics',
        icon: <IconStatistics/>
    }
]


export default function Profile() {
    const [activeTab, setActiveTab] = useState('games')

    return <>
        <PanelPlayerTabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={tabs}
        />
        <div className={css.tabsContent}>
            {
                activeTab === 'games' &&
                    <TabGames/>
            }
            {
                activeTab === 'statistics' &&
                    <TabStatistics/>
            }
        </div>
    </>
}