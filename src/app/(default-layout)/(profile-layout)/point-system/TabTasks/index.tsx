'use client'

import { useState } from 'react'

import { IoIosAlarm } from "react-icons/io";
import { PiFlagBannerFill } from "react-icons/pi";

import { CardBody, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import { ICardTab } from '@/components/CardTabs'
import CardTabs from '../../CardTabs'
import Card from '../../Card'
import CardHead from '../../CardHead'
import Cards from '../../Cards'


type TabName = 'projects' | 'platform'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('projects')

    const mobileTabs: ICardTab[] = [
        {
            value: 'projects',
            title: 'Avatar',
            icon: <IoIosAlarm />
        },
        {
            value: 'platform',
            title: 'Profile',
            icon: <PiFlagBannerFill />
        }
    ]

    return <Container>
        <CardTabs
            tabs={mobileTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <Cards>
            <Card
                active={activeTab === 'projects'}
            >
                <div>
                    <CardHead
                        title='Avatar'
                        icon={<IoIosAlarm />}   
                    />
                    <CardBody>

                    </CardBody>
                </div>
            </Card>
            <Card
                active={activeTab === 'platform'}
            >
                <div>
                    <CardHead
                        title='Profile'
                        icon={<PiFlagBannerFill/>}
                    />
                    <CardBody>
                    </CardBody>
                </div>
            </Card>
        </Cards>
    </Container>
}