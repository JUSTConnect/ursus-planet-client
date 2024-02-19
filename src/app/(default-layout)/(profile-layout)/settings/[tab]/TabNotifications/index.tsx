import { useState } from 'react'

import { FaList } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";

import { FormEventHandler } from 'react'
import { useUsersSelf, useUsersSelfUpdate } from '@/hooks/react-query/users'
import Button from '@/components/core/Button'
import { CardBody } from "@/components/core/Card"
import {ICardTab} from '@/components/CardTabs'
import Container from "@/components/core/Container"
import ModalEmail from '@/components/ModalEmail'
import Typography from '@/components/core/Typography'
import Switch from '@/components/core/Switch'
import CardLoader from '@/components/CardLoader'

import CardHead from '../../../CardHead'
import CardTabs from '../../../CardTabs'
import Card from '../../../Card'
import Cards from '../../../Cards'

import css from './index.module.scss'
import BlockFrequency from './BlockFrequency'


type TabName = 'notifications' | 'subscriptions'

const tabs: ICardTab[] = [
    {
        value: 'notifications',
        title: 'Notifications',
        icon: <FaList/>
    },
    {
        value: 'subscriptions',
        title: 'Subscriptions',
        icon: <FaBell/>
    }
]  


export default function TabProfile() {

    const {data, isLoading, refetch} = useUsersSelf()
    const {mutateAsync, isPending} = useUsersSelfUpdate()
    const [activeTab, setActiveTab] = useState<TabName>('notifications')
    const [modalEmail, setModalEmail] = useState(false)

    const handleSubmitSettings: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        mutateAsync(new FormData(e.currentTarget)).then(() => {
            refetch()
        })
    }

    return <Container className={css.container}>
        <CardTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className={css.mobileTabs}
        />
        <Cards>
            <Card
                active={activeTab === 'notifications'}
            >
                <div>
                    <CardHead
                        title='Notifications'
                        icon={<FaList/>}
                    />
                    <CardBody className={css.cardBody}>
                        <Typography className={css.emptyDescription} variant='p' color='neutral'>It&apos;s empty here...</Typography>
                    </CardBody>
                </div>
            </Card>
            <Card
                active={activeTab === 'subscriptions'}
            >
                <div>
                    <CardHead
                        title='Subscription management'
                        icon={<FaBell/>}
                    />
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
                                <Button color='gray' type='submit' className={css.buttonSave} disabled={isPending}>
                                    {
                                        isPending ? 'Saving...' : 'Save'
                                    }
                                </Button>
                            </form>
                        }
                    </CardBody>
                </div>
            </Card>
        </Cards>
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Container>
}