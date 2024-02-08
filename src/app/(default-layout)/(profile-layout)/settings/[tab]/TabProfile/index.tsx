'use client'

import { useState, useRef, FormEvent, useEffect } from 'react'
import Image from 'next/image'
import { AxiosError } from 'axios'

import { FaCircleUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import css from './index.module.scss'
import iconInfo from './icons/info.svg'
import iconEmailOk from './icons/email-ok.svg.svg'

import { useUsersSelf, useUsersSelfUpdate } from '@/hooks/react-query/users'
import Avatar from "@/components/Avatar"
import { CardBody, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'
import { Input } from '@/components/core/Input'
import Checkbox from '@/components/core/Checkbox'
import Box from '@/components/core/Box'
import Scroller from '@/components/core/Scroller'
import { ICardTab } from '@/components/CardTabs'
import CardLoader from '@/components/CardLoader'

import ModalEmail from '@/components/ModalEmail'
import CardHead from '../../../CardHead'
import CardTabs from '../../../CardTabs'
import Card from '../../../Card'
import Cards from '../../../Cards'


type TabName = 'avatar' | 'profile'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('avatar')
    const [modalEmail, setModalEmail] = useState(false)
    const [username, setUsername] = useState<'custom' | 'wallet'>('custom')
    const [avatar, setAvatar] = useState('')

    const { data, isLoading, refetch } = useUsersSelf()
    const { mutate, isPending, error } = useUsersSelfUpdate()

    const avatarInput = useRef<HTMLInputElement>(null)
    const avatarFormSubmit = useRef<HTMLInputElement>(null)
    const usernameForm = useRef<HTMLFormElement>(null)
    const usernameFormSubmit = useRef<HTMLInputElement>(null)
    const [usernameValue, setUsernameValue] = useState('')

    useEffect(
        () => data && setUsernameValue(data?.username),
    [data])

    const mobileTabs: ICardTab[] = [
        {
            value: 'avatar',
            title: 'Avatar',
            icon: <FaCircleUser/>
        },
        {
            value: 'profile',
            title: 'Profile',
            icon: <FaEdit/>
        }
    ]

    const handleChangeAvatar = () => {
        const avatar = avatarInput.current?.files?.[0]
        avatar && setAvatar(URL.createObjectURL(avatar))
    }

    const handleSubmitAvatar = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        mutate(formData)
        setTimeout(() => refetch(), 1000)
        e.currentTarget.reset()
        setAvatar('')
    }

    const handleSubmitUsername = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(new FormData(e.currentTarget))
        setTimeout(() => refetch(), 1000)        
    }

    return <Container className={css.container}>
        <CardTabs
            tabs={mobileTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <Cards>
            <Card
                active={activeTab === 'avatar'}
            >
                <div>
                    <CardHead
                        title='Avatar'
                        icon={<FaCircleUser/>}
                    />
                    <CardBody className={css.cardBody}>
                        {
                            !isLoading ?
                                <form encType='multipart/form-data' onSubmit={handleSubmitAvatar}>
                                    <Typography variant='p'>
                                        Profile Image
                                    </Typography>
                                    <Stack gap={1.5}>
                                        <div>
                                            <Avatar isLoading={isLoading} colors={data} src={avatar || data?.avatar} className={css.avatar} />
                                        </div>
                                        <div>
                                            <div className={css.avatarRecommend}>
                                                <Image src={iconInfo} alt='icon' />
                                                Recommend an image of at least 300x300. Max 5 mb.
                                            </div>
                                            <br />
                                            <Stack className={css.buttonsUpload} gap={.5}>
                                                <Button onClick={() => avatarInput?.current?.click()} size='sm' color='gray'>upload from gallery</Button>
                                                <input name="avatar" ref={avatarInput} onChange={handleChangeAvatar} type="file" hidden />
                                                <Button size='sm' color='gray'>NFT from wallet</Button>
                                            </Stack>
                                        </div>
                                    </Stack>
                                    <input type='submit' hidden ref={avatarFormSubmit}/>
                                </form>
                                : <CardLoader/>
                        }
                    </CardBody>
                </div>
                <CardFooter className={css.cardFooter}>
                    {
                        !!avatarInput.current?.files?.length &&
                            <Button onClick={() => avatarFormSubmit.current?.click()} color='gray' className={css.buttonSave}>
                                {isPending ? 'Saving...' : 'Save'}
                            </Button>
                    }
                </CardFooter>
            </Card>
            <Card
                active={activeTab === 'profile'}
            >
                <div>
                    <CardHead
                        title='Profile'
                        icon={<FaEdit/>}
                    />
                    <CardBody className={css.cardBody}>
                        {
                            !isLoading ?
                                <form autoComplete='off' onSubmit={handleSubmitUsername} ref={usernameForm}>
                                    <Box mb={1}>
                                        <Typography variant='p'>
                                            Username
                                        </Typography>
                                        <Box mb={1}>
                                            <Stack fullWidth className={css.stackInputCheckbox}>
                                                <div>
                                                    <Checkbox active={username === 'custom'} setActive={() => setUsername('custom')} />
                                                </div>
                                                <Input
                                                    fullWidth
                                                    defaultValue={data?.username||''}
                                                    onInput={e => setUsernameValue(e.currentTarget.value)}
                                                    name='username'
                                                    error={((error as AxiosError)?.response?.data as any)?.username}
                                                    placeholder='Set your username'
                                                />
                                            </Stack>
                                        </Box>
                                        <Stack fullWidth className={css.stackInputCheckbox}>
                                            <div>
                                                <Checkbox active={username === 'wallet'} setActive={() => setUsername('wallet')} />
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
                                            value={data?.email||''}
                                            onChange={ () => {} }
                                            className={css.inputEmail}
                                            iconStart={
                                                data?.email &&
                                                    <Image src={iconEmailOk} alt='icon' className={css.inputEmailIconOk} />
                                            }
                                            placeholder='Set your email'
                                        />
                                    </div>
                                    <input type="submit" hidden ref={usernameFormSubmit} />
                                </form>
                                : <CardLoader/>
                        }
                    </CardBody>
                </div>
                <CardFooter className={css.cardFooter}>
                    {
                        usernameValue !== data?.username &&
                            <Button onClick={() => usernameFormSubmit.current?.click() } color='gray' className={css.buttonSave}>
                                {
                                    isPending ? 'Saving...' : 'Save'
                                }
                            </Button>
                    }
                </CardFooter>
            </Card>
        </Cards>
        <ModalEmail active={modalEmail} setActive={setModalEmail} />
    </Container>
}