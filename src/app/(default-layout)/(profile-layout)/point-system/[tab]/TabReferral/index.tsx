'use client'

import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Table } from '@radix-ui/themes';

import { FaInfoCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";

import { useUsersSelf, useUserSelfReferrals } from '@/hooks/react-query/users';
import { CardBody } from "@/components/core/Card"
import Container from "@/components/core/Container"
import { ICardTab } from '@/components/CardTabs'
import Box from '@/components/core/Box';
import { Input } from '@/components/core/Input';
import Button from '@/components/core/Button';
import Stack from '@/components/core/Stack';
import ModalReferralCode from '@/components/ModalReferralCode'

import CardTabs from '../../../CardTabs'
import Card from '../../../Card'
import CardHead from '../../../CardHead'
import Cards from '../../../Cards'

import css from './index.module.scss'
import figure from './img/figure.svg'
import messageBottom from './img/message-bottom.svg'


type TabName = 'code' | 'info'


export default function TabProfile() {

    const {data} = useUsersSelf()
    const {data: dataReferrals} = useUserSelfReferrals()
    const [isModalReferralCodeActive, setIsModalReferralCodeActive] = useState(false)

    const [activeTab, setActiveTab] = useState<TabName>('code')
    const [isCopied, setIsCopied] = useState(false)

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

    const handleCopy = () => {
        navigator.clipboard.writeText(data?.username||'');
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    }

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
                                    Enter referral code  - <span className={css.points}>900 points</span>
                                </Box>
                                <Box>
                                Earn from referral player - <span className={css.points}>2%</span>
                                </Box>
                                <Image
                                    className={css.codeMessageBottom}
                                    src={messageBottom}
                                    alt='figure'
                                />
                            </Box>
                            {
                                !data?.referrer &&
                                    <Stack gap={1} alignCenter className={css.codeDescription}>
                                        <Box>
                                            <FaInfoCircle/>
                                        </Box>
                                        You can get referral code in our telegram or discord chat
                                    </Stack>
                            }
                            <Input
                                onClick={ () => !data?.referrer && setIsModalReferralCodeActive(true) }
                                placeholder='Enter referral code'
                                value={data?.referrer}
                                readOnly
                            />
                        </Box>
                    </Box>
                    <Box className={css.codeBottom}>
                        {
                            !data?.username ?
                                <Stack alignCenter gap={1} className={css.codeNoUsername}>
                                    <FaInfoCircle/>
                                    <Box>
                                        To have your own referral code you have to <Link className={css.linkSetUsername} href={'/settings/profile'}>set username</Link>
                                    </Box>
                                </Stack>
                            :
                            !data?.referrer ?
                                <Stack alignCenter gap={1} className={css.codeNoUsername}>
                                    <FaInfoCircle/>
                                    <Box>
                                        To have your own referral code you have to set referral code
                                    </Box>
                                </Stack>
                            :
                                <>
                                    <div className={css.codeBottomCode}>
                                        Your referral code : {data.username}
                                    </div>
                                    <Button
                                        onClick={handleCopy}
                                        className={css.codeBottomButton}
                                        color='white'
                                        disabled={isCopied}
                                        hovered
                                    >
                                        {
                                            isCopied ?
                                                'Copied'
                                                :
                                                'Copy'
                                        }
                                    </Button>
                                    <FaCopy onClick={handleCopy} className={css.codeBottomButtonMobile} />
                                </>
                        }
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
                            Total referrals
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={css.infoValue}>{dataReferrals?.count}</span>
                        </Box>
                        <Box mb={1}>
                            Quote of referrals
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={css.infoValue}>{data?.referral_quote}</span>
                        </Box>

                        <Table.Root className={css.infoTable}>
                            <Table.Body>
                                {
                                    dataReferrals?.results && dataReferrals.results.map((referral, index)=>
                                        <Table.Row key={index}>
                                            <Table.RowHeaderCell>{index+1}. {referral.username}</Table.RowHeaderCell>
                                            <Table.Cell>{referral.wallets[0]}</Table.Cell>
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
        <ModalReferralCode
            active={isModalReferralCodeActive}
            setActive={setIsModalReferralCodeActive}
        />
    </Container>
}