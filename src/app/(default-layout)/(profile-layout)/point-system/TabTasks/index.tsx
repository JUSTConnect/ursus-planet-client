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

import css from './index.module.scss'
import Item from './Item'


type TabName = 'projects' | 'platform'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('projects')

    const mobileTabs: ICardTab[] = [
        {
            value: 'projects',
            title: 'Mission project',
            icon: <IoIosAlarm />
        },
        {
            value: 'platform',
            title: 'Mission platform',
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
                        title='Mission project'
                        icon={<IoIosAlarm />}
                    />
                    <CardBody>
                        <div className={css.items}>
                            {
                                Array.from(Array(5)).map((_, index) =>
                                    <Item title='Follow project on platform' points={150} connect />
                                )
                            }
                            <Item title='Follow project on platform' points={150} connect follow />
                            <Item title='Follow project on platform' points={150} />
                            <Item title='Follow project on platform' points={150} done />
                        </div>
                    </CardBody>
                </div>
            </Card>
            <Card
                active={activeTab === 'platform'}
            >
                <div>
                    <CardHead
                        title='Mission Platform'
                        icon={<PiFlagBannerFill />}
                    />
                    <CardBody>
                        <div className={css.items}>
                            {
                                Array.from(Array(5)).map((_, index) =>
                                    <Item title='Follow project on platform' points={150} connect />
                                )
                            }
                            <Item title='Follow project on platform' points={150} connect follow />
                            <Item title='Follow project on platform' points={150} />
                            <Item title='Follow project on platform' points={150} done />
                        </div>
                    </CardBody>
                </div>
            </Card>
        </Cards>
    </Container>
}