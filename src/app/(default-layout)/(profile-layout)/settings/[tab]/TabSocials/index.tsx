'use client'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { AxiosError } from 'axios'

import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import css from './index.module.scss'
import figureDiscord from './img/figure-discord.svg'
import figureX from './img/figure-x.svg'
import figureTelegram from './img/figure-telegram.svg'
import figureGithub from './img/figure-github.svg'
import iconOk from './img/icon-ok.svg'
import iconReload from './img/icon-reload.svg'
import iconDelete from './img/icon-delete.svg'
import bgDrop from './img/bg-drop.svg'

import { useSocials, useSocialConfig,  useSocialsDelete, useAuth } from '@/hooks/react-query/socials'
import Box from '@/components/core/Box'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'
import Container from '@/components/core/Container'
import Card, {CardBody} from '@/components/core/Card'
import Stack from '@/components/core/Stack'
import Typography from '@/components/core/Typography'
import { Input } from '@/components/core/Input'
import Modal from '@/components/core/Modal'
import CardLoader from '@/components/CardLoader'


import {
    getDiscordUrl,
    getXUrl,
    getGithubUrl
} from './urls'
import { useUsersSelf } from '@/hooks/react-query/users'


interface Section
{
    title: string
    name: 'discord' | 'telegram' | 'x' | 'github'
    figure: string
    icon: React.ReactNode
    connected: boolean
    link?: string
    onDelete?: CallableFunction
    error?: AxiosError<{detail: string}>
}


export default function TabSocials() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [modalTelegram, setModalTelegram] = useState(false)

    const {data, isLoading, refetch} = useSocials()
    const {refetch: refetchUser} = useUsersSelf()
    const {data: configData} = useSocialConfig()

    const {mutateAsync} = useAuth()

    useEffect(() => {
        if (searchParams.get('auth') && searchParams.get('code')) {
            const data = new FormData()
            data.append('code', searchParams.get('code')||'')
            data.append('social', searchParams.get('auth')||'')
            mutateAsync(data)
                .catch((error) => {
                    alert((error as AxiosError<{detail: string}>).response?.data?.detail)
                })
                .finally(() => {
                    refetch()
                    router.replace(pathname)
                })
        }
    }, [mutateAsync, pathname, refetch, refetchUser, router, searchParams])

    const {mutate: mutateDelete} = useSocialsDelete()

    const handleSubmitTelegram = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append('social', 'telegram')
        mutateAsync(data)
            .catch((error) => {
                alert((error as AxiosError<{detail: string}>).response?.data?.detail)
            })
            .finally(() => {
                refetch()
                router.replace(pathname)
                setModalTelegram(false)
            })
    }

    const handleDelete = (social: string) => {
        const data = new FormData()
        data.append('social', social)
        mutateDelete(data)
        setTimeout(() => {refetch(); refetchUser()}, 1000)
    }

    const sections: Section[] = [
        {
            title: 'Discord',
            name: 'discord',
            figure: figureDiscord,
            connected: false,
            icon: <FaDiscord/>,
            link: configData && getDiscordUrl(configData?.discord).toString(),
        },
        {
            title: 'X',
            name: 'x',
            figure: figureX,
            connected: false,
            icon: <FaSquareXTwitter/>,
            link: configData && getXUrl(configData?.x).toString()
        },
        {
            title: 'Telegram',
            name: 'telegram',
            figure: figureTelegram,
            connected: false,
            icon: <FaTelegram/>,
        },
        {
            title: 'Github',
            name: 'github',
            figure: figureGithub,
            connected: false,
            icon: <FaGithub/>,
            link: configData && getGithubUrl(configData?.github).toString(),
        }
    ]

    return <Container>
        <Box className={[css.cards, css.container].join(' ')}>
            {
                sections.map(section =>
                    <Card key={section.title}>
                        <CardBody className={css.cardSocialBody}>
                            {
                                !isLoading ? <>
                                    <Image className={css.cardSocialBgDrop} src={bgDrop} alt='bg drop'/>
                                    <div>
                                        <Typography
                                            className={css.cardSocialTitle}
                                            variant='p'
                                        >
                                            { section.title === 'X' ? 'X account' : section.title }
                                        </Typography>
                                        <Typography
                                            className={css.cardSocialDescription}
                                            variant='p'
                                        >
                                            Connect your {section.title} account to the application to be able to quickly complete tasks.
                                        </Typography>
                                    </div>
                                    <Typography color='error' variant='p'>
                                        {section.error?.response?.data?.detail}
                                    </Typography>
                                    <div>
                                        <Image className={css.cardSocialFigure} src={section.figure} alt='figure'/>
                                        { data && data[section.name] ?
                                            <Stack gap={.5} className={css.cardSocialForm} fullWidth alignCenter>
                                                <Input
                                                    fullWidth
                                                    value={data[section.name]||''}
                                                    onChange={() => {}}
                                                    iconStart={<Image src={iconOk} alt='icon'/>}
                                                />
                                                <Link href={section.link||'#'}>
                                                    <ButtonIcon
                                                        onClick={() => {section.name === 'telegram' && setModalTelegram(true)}}
                                                        className={css.cardSocialButtonIcon}
                                                        color='gray'
                                                    >
                                                        <Image src={iconReload} alt='icon'/>
                                                    </ButtonIcon>
                                                </Link>
                                                <div>
                                                    <ButtonIcon onClick={() => handleDelete(section.name)} className={css.cardSocialButtonIcon} color='gray'>
                                                        <Image src={iconDelete} alt='icon'/>
                                                    </ButtonIcon>
                                                </div>
                                            </Stack>
                                        :
                                            <Link href={section.link||'#'}>
                                                <Button
                                                    className={css.cardSocialButton}
                                                    iconStart={section.icon}
                                                    color='dark'
                                                    onClick={ section.name === 'telegram' ? () => setModalTelegram(true) : undefined }
                                                >
                                                    Connect account
                                                </Button>
                                            </Link>
                                        }
                                    </div>
                                </> : <CardLoader/>
                            }
                        </CardBody>
                    </Card>
                )
            }
        </Box>
        <Modal active={modalTelegram} setActive={setModalTelegram}>
            <Card className={css.modalTelegram}>
                <CardBody>
                    <form onSubmit={handleSubmitTelegram}>
                        <Typography variant='p' style={{fontSize: '1.5rem'}}>Please enter code received by our telegram bot here.</Typography>
                        <br />
                        <Input placeholder='Enter code...' name='code'/>
                        <br />
                        <Link href='https://t.me/ursasplanet_bot' target="_blank">
                            <Button fullWidth color='white' type='button'>Go to bot</Button>
                        </Link>
                        <br />
                        <Button type='submit' fullWidth>Submit</Button>
                    </form>
                </CardBody>
            </Card>
        </Modal>
    </Container>
}
