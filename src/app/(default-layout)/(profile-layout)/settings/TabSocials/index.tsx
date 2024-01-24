'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import { AxiosError, AxiosResponse } from 'axios'


import css from './index.module.scss'
import figureDiscord from './img/figure-discord.svg'
import figureX from './img/figure-x.svg'
import figureTelegram from './img/figure-telegram.svg'
import figureGithub from './img/figure-github.svg'
import iconButton from './img/icon-button.svg'
import iconButtonDiscord from './img/icon-button-discord.png'
import iconButtonX from './img/icon-button-x.png'
import iconButtonTelegram from './img/icon-button-telegram.png'
import iconButtonGithub from './img/icon-button-github.png'
import iconOk from './img/icon-ok.svg'
import iconReload from './img/icon-reload.svg'
import iconDelete from './img/icon-delete.svg'
import bgDrop from './img/bg-drop.svg'

import { useSocials, useSocialsDelete, useAuth } from '@/hooks/react-query/socials'
import Box from '@/components/core/Box'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'
import Container from '@/components/core/Container'
import Card, {CardBody} from '@/components/core/Card'
import Stack from '@/components/core/Stack'
import Typography from '@/components/core/Typography'
import { Input } from '@/components/core/Input'


interface Section
{
    title: string
    name: 'discord' | 'telegram' | 'x' | 'github'
    figure: string
    icon: StaticImageData
    connected: boolean
    link?: string
    onDelete?: CallableFunction
    error?: AxiosError<{detail: string}>
}




export default function TabSocials() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {data, refetch} = useSocials()

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
    }, [])

    const {mutate: mutateDelete} = useSocialsDelete()

    const handleDelete = (social: string) => {
        const data = new FormData()
        data.append('social', social)
        mutateDelete(data)
        setTimeout(() => refetch(), 1000)
    }

    const sections: Section[] = [
        {
            title: 'Discord',
            name: 'discord',
            figure: figureDiscord,
            connected: false,
            icon: iconButtonDiscord,
            link: 'https://discord.com/api/oauth2/authorize?client_id=1198777405234499704&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsettings%2F%3Fauth%3Ddiscord&scope=identify',
        },
        {
            title: 'X',
            name: 'x',
            figure: figureX,
            connected: false,
            icon: iconButtonX
        },
        {
            title: 'Telegram',
            name: 'telegram',
            figure: figureTelegram,
            connected: false,
            icon: iconButtonTelegram,
            link: 'https://oauth.telegram.org/auth?bot_id=6505934697&origin=http%3A%2F%2Fleks.hooli.xyz&embed=1&request_access=write&lang=en&return_to=http%3A%2F%2Fleks.hooli.xyz%2Fsettings'
        },
        {
            title: 'Github',
            name: 'github',
            figure: figureGithub,
            connected: false,
            icon: iconButtonGithub,
            link: `https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.ceba5cde6dfa0cb8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsettings%2F%3Fauth%3Dgithub`,
        }
    ]

    return <Container>
        <Box className={[css.cards, css.container].join(' ')}>
            {
                sections.map(section =>
                    <Card key={section.title}>
                        <CardBody className={css.cardSocialBody}>
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
                                            <ButtonIcon className={css.cardSocialButtonIcon} color='gray'>
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
                                            iconStart={<Image src={section.icon} alt='icon'/>}
                                            color='dark'
                                            animated
                                        >
                                            Connect account
                                        </Button>
                                    </Link>
                                }
                            </div>
                        </CardBody>
                    </Card>
                )
            }
        </Box>
    </Container>
}