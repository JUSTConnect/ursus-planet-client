'use client'

import { useState } from 'react'

import { IoIosAlarm } from "react-icons/io";
import { PiFlagBannerFill } from "react-icons/pi";

import { useTasksPlatform } from '@/hooks/react-query/tasks';
import { CardBody } from "@/components/core/Card"
import Container from "@/components/core/Container"
import { ICardTab } from '@/components/CardTabs'
import Box from '@/components/core/Box';

import CardTabs from '../../../CardTabs'
import Card from '../../../Card'
import CardHead from '../../../CardHead'
import Cards from '../../../Cards'

import css from './index.module.scss'
import Item from './Item'


type TabName = 'projects' | 'platform'


export default function TabProfile() {
    const {data: tasksPlatform, isSuccess: tasksPlatformSuccess} = useTasksPlatform()

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
                <Box>
                    <CardHead
                        title='Mission project'
                        icon={<IoIosAlarm />}
                    />
                    <CardBody>
                        <Box className={css.items}>
                        </Box>
                    </CardBody>
                </Box>
            </Card>
            <Card
                active={activeTab === 'platform'}
            >
                <Box>
                    <CardHead
                        title='Mission Platform'
                        icon={<PiFlagBannerFill />}
                    />
                    <CardBody>
                        <Box className={css.items}>
                            {
                                tasksPlatformSuccess && tasksPlatform
                                    .filter(item=>item.is_active)
                                    .map((task, index) =>
                                        <Item
                                            name={task.name}
                                            key={index}
                                            title={task.title}
                                            reward={task.reward}
                                            link={task.link}
                                            log={task.log}
                                        />                                
                                )
                            }
                        </Box>
                    </CardBody>
                </Box>
            </Card>
        </Cards>
    </Container>
}