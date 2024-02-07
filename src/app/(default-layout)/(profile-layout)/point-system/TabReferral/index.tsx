'use client'

import { useState } from 'react'
import Image from 'next/image';

import { Table } from '@radix-ui/themes';

import { FaInfoCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";

import { CardBody } from "@/components/core/Card"
import Container from "@/components/core/Container"
import { ICardTab } from '@/components/CardTabs'
import Box from '@/components/core/Box';
import { Input } from '@/components/core/Input';
import Button from '@/components/core/Button';

import CardTabs from '../../CardTabs'
import Card from '../../Card'
import CardHead from '../../CardHead'
import Cards from '../../Cards'

import css from './index.module.scss'
import figure from './img/figure.svg'
import messageBottom from './img/message-bottom.svg'


type TabName = 'code' | 'info'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('code')

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
                active={activeTab === 'code'}
            >
                <CardHead
                    title='Referral code'
                    icon={<FaLink />}
                />
                <CardBody className={css.codeBody}>
                    <Box className={css.codeTop}>
                        <Box className={css.figure}>
                            <Image
                                src={figure}
                                alt='figure'
                            />
                        </Box>
                        <Box className={css.codeContent}>
                            <Box className={css.codeMessage}>
                                <Box mb={1}>
                                    Enter refferal code  - <span className={css.points}>900 points</span>
                                </Box>
                                <Box>
                                    Refferal player  - <span className={css.points}>900 points</span>
                                </Box>
                                <Image
                                    className={css.codeMessageBottom}
                                    src={messageBottom}
                                    alt='figure'
                                />
                            </Box>
                            <Box className={css.codeDescription}>
                                We recommend an image of at least 300x300. Gift work too. Max 5 mb.
                            </Box>
                            <Input
                                placeholder='Enter refferal code'
                            />
                        </Box>
                    </Box>
                    <Box className={css.codeBottom}>
                        <div className={css.codeBottomCode}>
                            Your referal code : 4t43g554ehgb54reregergerg
                        </div>
                        <Box>
                            <Button className={css.codeBottomButton} color='white'>Copy link</Button>
                        </Box>
                        <FaCopy className={css.codeBottomButtonMobile} />
                    </Box>
                </CardBody>
            </Card>
            <Card
                active={activeTab === 'info'}
            >
                <CardHead
                    title='Referral info'
                    icon={<FaInfoCircle />}
                />
                <CardBody className={css.codeBody}>
                    <Box>
                        <Box mb={1}>
                            Total referrals : <span className={css.infoValue}>30</span>
                        </Box>
                        <Box mb={1}>
                            Quote of referrals : <span className={css.infoValue}>30</span>
                        </Box>

                        <Table.Root className={css.infoTable}>
                            <Table.Body>
                                {
                                    Array.from(Array(5)).map((_, index)=>
                                        <Table.Row>
                                            <Table.RowHeaderCell>1. Username</Table.RowHeaderCell>
                                            <Table.Cell>0x0ad6a1b701edde68520538d502c16900a1ee73f5</Table.Cell>
                                            <Table.Cell>101</Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table.Root>
                    </Box>
                    <Box className={css.infoNote}>
                        <Box mb={1} className={css.infoNoteTitle}>
                            Note:
                        </Box>
                        <Box>
                            Your daily invitation limit is equal to the number of your current referrals. Exceeding the daily invitation limit will invalidate the code for the rest of the day.
                        </Box>
                    </Box>
                </CardBody>
            </Card>
        </Cards>
    </Container>
}