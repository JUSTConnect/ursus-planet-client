'use client'

import { useState } from 'react'

import { FaInfoCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

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
            value: 'code',
            title: 'Referral code',
            icon: <FaLink />
        },
        {
            value: 'info',
            title: 'Referral info',
            icon: <FaInfoCircle />
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
                        title='Referral code'
                        icon={<FaLink />}   
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
                        title='Referral info'
                        icon={<FaInfoCircle/>}
                    />
                    <CardBody>
                    </CardBody>
                </div>
            </Card>
        </Cards>
    </Container>
}