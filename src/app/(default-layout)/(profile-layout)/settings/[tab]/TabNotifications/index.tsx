'use client'

import { Suspense, useState } from 'react'
import Image from 'next/image'

import { FormEventHandler } from 'react'
import { useUsersSelf, useUsersSelfUpdate } from '@/hooks/react-query/users'
import Button from '@/components/core/Button'
import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import CardTabs, {ICardTab} from '@/components/CardTabs'
import Container from "@/components/core/Container"
import ModalEmail from '@/components/ModalEmail'
import Typography from '@/components/core/Typography'
import Switch from '@/components/core/Switch'
import CardLoader from '@/components/CardLoader'

import BlockFrequency from './BlockFrequency'

import css from './index.module.scss'
import iconNotification from './icons/icon-notification.png'
import iconSubscription from './icons/icon-subscription.png'


type TabName = 'notifications' | 'subscriptions'

const tabs: ICardTab[] = [
    {
        value: 'notifications',
        title: 'Notifications',
        icon: iconNotification
    },
    {
        value: 'subscriptions',
        title: 'Subscriptions',
        icon: iconSubscription
    }
]


export default function TabProfile() {

    const {data, isLoading, refetch} = useUsersSelf()
    const {mutate, isPending} = useUsersSelfUpdate()
    const [activeTab, setActiveTab] = useState<TabName>('notifications')
    const [modalEmail, setModalEmail] = useState(false)

    const handleSubmitSettings: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        mutate(new FormData(e.currentTarget))
        refetch()
    }

    return <Container className={css.container}>
        <CardTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className={css.mobileTabs}
        />
        <div className={css.cards}>
            <Card
                className={[
                    css.card,
                    activeTab === 'notifications' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconNotification} alt='icon' />
                        Notifications
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Typography className={css.emptyDescription} variant='p' color='neutral'>It&apos;s empty here...</Typography>
                    </CardBody>
                </div>
            </Card>
            <Card
                className={[
                    css.card,
                    activeTab === 'subscriptions' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconSubscription} alt='icon' />
                        Subscription management
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        {
                            isLoading ? <CardLoader/> :
                            <form onSubmit={handleSubmitSettings}>
                                <Typography variant='p'>Cabinet notification</Typography>
                                <div className={css.blockSubscription}>
                                    Email notification
                                    <Switch
                                        defaultChecked={data?.cabinet_notifications_email}
                                        name={'cabinet_notifications_email'}
                                    />
                                </div>
                                <div className={css.blockSubscription}>
                                    Account notification
                                    <Switch
                                        defaultChecked={data?.cabinet_notifications_account}
                                        name={'cabinet_notifications_account'}
                                    />
                                </div>
                                <BlockFrequency
                                    name={'cabinet_notifications_frequency'}
                                    defaultValue={data?.cabinet_notifications_frequency}
                                />
                                <Typography variant='p'>Project notification</Typography>
                                <div className={css.blockSubscription}>
                                    Email notification
                                    <Switch
                                        defaultChecked={data?.project_notifications_email}
                                        name={'project_notifications_email'}
                                    />
                                </div>
                                <div className={css.blockSubscription}>
                                    Account notification
                                    <Switch
                                        defaultChecked={data?.project_notifications_account}
                                        name={'project_notifications_account'}
                                    />
                                </div>
                                <BlockFrequency
                                    name={'project_notifications_frequency'}
                                    defaultValue={data?.project_notifications_frequency}
                                />
                                <Button color='gray' className={css.buttonSave} disabled={isPending}>
                                    {
                                        isPending ? 'Saving...' : 'Save'
                                    }
                                </Button>
                            </form>
                        }
                    </CardBody>
                </div>
            </Card>
        </div>
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Container>
}