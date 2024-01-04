'use client'

import { useState } from 'react'
import Image from 'next/image'

import css from './index.module.scss'
import iconAvatar from './icons/avatar.svg'
import iconProfile from './icons/profile.svg'
import iconInfo from './icons/info.svg'
import iconEmailOk from './icons/email-ok.svg.svg'

import Avatar from "@/components/Avatar"
import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'
import { Input } from '@/components/core/Input'
import Checkbox from '@/components/core/Checkbox'
import Box from '@/components/core/Box'
import Scroller from '@/components/core/Scroller'
import CardTabs, {ICardTab} from '@/components/CardTabs'

import ModalEmail from '@/components/ModalEmail'


type TabName = 'avatar' | 'profile'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('avatar')
    const [modalEmail, setModalEmail] = useState(false)
    const [username, setUsername] = useState<'custom'|'wallet'>('custom')

    const mobileTabs: ICardTab[] = [
        {
            value: 'avatar',
            title: 'Avatar',
            icon: iconAvatar
        },
        {
            value: 'profile',
            title: 'Profile',
            icon: iconProfile
        }
    ]

    return <Container className={css.container}>
        <CardTabs
            className={css.mobileTabs}
            tabs={mobileTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <div className={css.cards}>
            <Card
                className={[
                    css.card,
                    activeTab === 'avatar' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image src={iconAvatar} alt='icon' />
                        Avatar
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Typography variant='p'>
                            Profile Image
                        </Typography>
                        <Stack gap={1.5}>
                            <div>
                                <Avatar className={css.avatar} />
                            </div>
                            <div>
                                <div className={css.avatarRecommend}>
                                    <Image src={iconInfo} alt='icon' />
                                    recommend an image of at least 300x300. Gift work too. Max 5 mb.
                                </div>
                                <br />
                                <Stack className={css.buttonsUpload} gap={.5}>
                                    <Button size='sm' color='gray'>upload from gallery</Button>
                                    <Button size='sm' color='gray'>NFT from wallet</Button>
                                </Stack>
                            </div>
                        </Stack>
                    </CardBody>
                </div>
                <CardFooter className={css.cardFooter}>
                    <Button color='gray' className={css.buttonSave}>Save</Button>
                </CardFooter>
            </Card>
            <Card
                className={[
                    css.card,
                    activeTab === 'profile' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image src={iconProfile} alt='icon' />
                        Profile
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Box mb={1}>
                            <Typography variant='p'>
                                Username
                            </Typography>
                            <Box mb={1}>
                                <Stack fullWidth className={css.stackInputCheckbox}>
                                    <div>
                                        <Checkbox active={username==='custom'} setActive={ () => setUsername('custom') }/>
                                    </div>
                                    <Input
                                        fullWidth
                                        defaultValue={'Stiven38324234'}
                                    />
                                </Stack>
                            </Box>
                            <Stack fullWidth className={css.stackInputCheckbox}>
                                <div>
                                    <Checkbox active={username==='wallet'} setActive={ () => setUsername('wallet') }/>
                                </div>
                                <Box className={css.formControlWalletName}>
                                    <Typography
                                        variant='p'
                                    >
                                        Wallet name
                                    </Typography>
                                    <Scroller>
                                        <Stack maxContent className={css.formControlWalletNameStack}>
                                            <Button
                                                size='sm'
                                                color='gray'
                                                iconStart={<Image src={iconEmailOk} alt='icon' />}
                                            >
                                                Stiven38324
                                            </Button>
                                            <Button
                                                size='sm'
                                                color='gray'
                                            >
                                                Stiven38</Button>
                                            <Button
                                                size='sm'
                                                color='gray'
                                            >
                                                Stiven334</Button>
                                        </Stack>
                                    </Scroller>
                                </Box>
                            </Stack>
                        </Box>
                        <Typography variant='p'>
                            Email
                        </Typography>
                        <div className={css.inputEmailContainer}>
                            <Input
                                onClick={() => setModalEmail(true)}
                                fullWidth
                                defaultValue={'Stiven38324234@gmail.com'}
                                className={css.inputEmail}
                                iconStart={
                                    <Image src={iconEmailOk} alt='icon' className={css.inputEmailIconOk} />
                                }
                            />
                        </div>
                    </CardBody>
                </div>
                <CardFooter className={css.cardFooter}>
                    <Button color='gray' className={css.buttonSave}>Save</Button>
                </CardFooter>
            </Card>
        </div>
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Container>
}