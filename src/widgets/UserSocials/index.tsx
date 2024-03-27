'use client'
import { useState } from 'react'
import { Grid } from '@radix-ui/themes'
import { FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import useOauthRedirectHandler from '@/entities/socials/hooks/useOauthRedirectHandler';
import { useMySocials, useSocialConfig, useMySocialDisconnect } from '@/entities/socials/api';
import { getDiscordUrl, getXUrl, getGithubUrl } from '@/entities/socials/helpers/oauth';
import CardSocialConnect from '@/entities/socials/ui/CardSocialConnect'
import ModalTelegramConnect from '@/entities/socials/ui/ModalTelegram'
import Container from "@/shared/ui/Container"

import figureDiscord from './img/figure-discord.svg'
import figureX from './img/figure-x.svg'
import figureTelegram from './img/figure-telegram.svg'
import figureGithub from './img/figure-github.svg'


export default function UserSocials() {
    const [modalTelegram, setModalTelegram] = useState(false)

    const {data, isLoading} = useMySocials()
    const {data: configData, isLoading: isLoadinConfig} = useSocialConfig()
    const {mutate: mutateDelete} = useMySocialDisconnect()

    useOauthRedirectHandler()

    return <Container>
        <Grid
            columns={{
                xs: '2',
                md: '3',
                lg: '4'
            }}
            gap='5'
        >
            <CardSocialConnect
                title='Discord'
                figure={figureDiscord}
                icon={<FaDiscord/>}
                handleConnectLink={configData ? getDiscordUrl(configData.discord) : '#'}
                handleDisconnect={() => mutateDelete('discord')}
                value={data?.discord}
                loading={isLoading || isLoadinConfig}
            />
            <CardSocialConnect
                title='X account'
                figure={figureX}
                icon={<FaSquareXTwitter/>}
                handleConnectLink={configData ? getXUrl(configData.x) : '#'}
                handleDisconnect={() => mutateDelete('x')}
                value={data?.x}
                loading={isLoading || isLoadinConfig}
            />
            <CardSocialConnect
                title='Telegram'
                figure={figureTelegram}
                icon={<FaTelegram/>}
                handleConnect={ () => setModalTelegram(true) }
                handleDisconnect={() => mutateDelete('telegram')}
                value={data?.telegram}
                loading={isLoading || isLoadinConfig}
            />
            <CardSocialConnect
                title='Github'
                figure={figureGithub}
                icon={<FaGithub/>}
                handleConnectLink={ configData ? getGithubUrl(configData.github) : '#' }
                handleDisconnect={() => mutateDelete('github')}
                value={data?.github}
                loading={isLoading || isLoadinConfig}
            />
        </Grid>
        <ModalTelegramConnect active={modalTelegram} setActive={setModalTelegram}/>
    </Container>
}
