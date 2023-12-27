'use client'

import { useState } from "react"

import Container from "@/components/core/Container"

import css from './index.module.scss'
import IconGames from './img/IconGames'
import IconStatistics from './img/IconStatistics'

import {Tab} from '../TabsNavigation'
import Top from '../Top'
import TabsNavigation from '../TabsNavigation'


export type TabValue = 'profile' | 'socials' | 'wallets' | 'notifications'


const tabs: Tab[] = [
    {
        name: 'Game',
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
    const [tab, setTab] = useState('games')

    return <>
        <Container>
            <Top tab={tab}/>
        </Container>
        <div className={css.tabs}>
            <TabsNavigation setTab={setTab} tab={tab} tabs={tabs}/>
            <div className={css.tabsWrapper}>

            </div>
        </div>
    </>
}