'use client'

import { useRouter } from "next/navigation"

import PanelPlayerTabs, {IPanelPlayerTab} from "@/components/PanelPlayerTabs"

import css from './index.module.scss'
import { IoSend } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

import protectedPage from "@/hocs/protectedPage";

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


function Profile({ params }: { params: { tab: string } }) {
    const router = useRouter()

    return <>
        <PanelPlayerTabs
            setActiveTab={(name) => router.push(name)}
            activeTab={params.tab}
            tabs={tabs}
        />
        <div className={css.tabsContent}>
            {
                params.tab === 'tasks' &&
                    <TabTasks/>
            }
            {
                params.tab === 'referral' &&
                    <TabReferral/>
            }
        </div>
    </>
}


export default protectedPage(Profile)