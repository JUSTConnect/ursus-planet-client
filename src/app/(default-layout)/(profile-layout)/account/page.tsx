'use client'

import { useState } from "react"

import protectedPage from "@/hocs/protectedPage"
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


function AccountPage() {
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


export default protectedPage(AccountPage)