'use client'

import { useState } from "react"

import PanelPlayerTabs, {IPanelPlayerTab} from "@/components/PanelPlayerTabs"

import css from './index.module.scss'
import { IoSend } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

import TabTasks from './TabTasks'
import TabReferral from './TabReferral'


export type TabValue = 'profile' | 'socials' | 'wallets' | 'notifications'


const tabs: IPanelPlayerTab[] = [
    {
        name: 'Tasks',
        value: 'tasks',
        icon: <IoSend/>
    },
    {
        name: 'Referral',
        value: 'referral',
        icon: <FaLink/>
    }
]


export default function Profile() {
    const [activeTab, setActiveTab] = useState('tasks')

    return <>
        <PanelPlayerTabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={tabs}
        />
        <div className={css.tabsContent}>
            {
                activeTab === 'tasks' &&
                    <TabTasks/>
            }
            {
                activeTab === 'referral' &&
                    <TabReferral/>
            }
        </div>
    </>
}