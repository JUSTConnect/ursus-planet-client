'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import iconNotification from './icons/icon-notification.png'
import iconSubscription from './icons/icon-subscription.png'

import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"

import ModalEmail from '@/components/ModalEmail'


export default function TabProfile() {
    type TabName = 'avatar' | 'profile'
    type Tab = {
        name: TabName,
        title: string,
        icon: StaticImageData
    }

    const [activeTab, setActiveTab] = useState<TabName>('avatar')
    const [modalEmail, setModalEmail] = useState(false)

    const tabs: Tab[] = [
        {
            name: 'avatar',
            title: 'Notifications',
            icon: iconNotification
        },
        {
            name: 'profile',
            title: 'Subscriptions',
            icon: iconSubscription
        }
    ]

    return <Container className={css.container}>
        <div className={css.innerNav}>
            {
                tabs.map(tab =>
                    <CardHead
                        key={tab.name}
                        className={[css.innerNavTab, activeTab === tab.name && css.innerNavTabActive].join(' ')}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        <div className={css.innerNavText}>
                            <Image
                                className={css.innerNavIcon}
                                src={tab.icon}
                                alt='icon'
                            />
                            {tab.title}
                        </div>
                    </CardHead>
                )
            }
        </div>
        <div className={css.cards}>
            <Card
                className={[
                    css.card,
                    activeTab === 'avatar' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconNotification} alt='icon' />
                        Notifications
                    </CardHead>
                    <CardBody className={css.cardBody}>
                    </CardBody>
                </div>
            </Card>
            <Card
                className={[
                    css.card,
                    activeTab === 'profile' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconSubscription} alt='icon' />
                        Subscription management
                    </CardHead>
                    <CardBody className={css.cardBody}>
                    </CardBody>
                </div>
            </Card>
        </div>
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Container>
}