'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import cardProjectFigure from './img/card-project-figure.png'
import iconPlayer from './img/player.svg'
import iconProject from './img/project.svg'
import iconEth from './img/icon-eth.png'
import iconSol from './img/icon-sol.png'
import iconAptos from './img/icon-aptos.png'
import iconSui from './img/icon-sui.png'

import Box from '@/components/core/Box'
import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"
import Stack from '@/components/core/Stack'
import Typography from '@/components/core/Typography'

import ChainItem from './ChainItem'


export default function TabProfile() {
    type TabName = 'player' | 'project'
    type Tab = {
        name: TabName,
        title: string,
        icon: StaticImageData
    }

    const [activeTab, setActiveTab] = useState<TabName>('player')
    const tabs: Tab[] = [
        {
            name: 'player',
            title: 'Avatar',
            icon: iconPlayer
        },
        {
            name: 'project',
            title: 'Profile',
            icon: iconProject
        }
    ]

    return <Container className={css.container}>
        <div className={css.innerNav}>
            <Stack fullWidth>
                {
                    tabs.map(tab =>
                        <CardHead
                            key={tab.name}
                            className={[css.innerNavTab, activeTab === tab.name &&
                                css.innerNavTabActive].join(' ')}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            <div className={
                                css.innerNavText}>
                                <Image
                                    className={
                                        css.innerNavIcon}
                                    src={tab.icon}
                                    alt='icon'
                                />
                                {tab.title}
                            </div>
                        </CardHead>
                    )
                }
            </Stack>
        </div>
        <div className={css.cards}>
            <Card
                className={[

                    css.card,
                    activeTab === 'player' &&
                    css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={
                        css.cardHead}>
                        <Image src={iconPlayer} alt='icon' />
                        Player
                    </CardHead>
                    <CardBody>

                        <Box className={css.cardBlock}>

                            <Typography variant='p'>Add network</Typography>
                            <div className={css.networkButtons}>
                                <Button
                                    iconStart={<Image src={iconEth} alt='icon'/>}
                                    color='gray'
                                    fullWidth
                                >
                                    EVM
                                </Button>
                                <Button
                                    iconStart={<Image src={iconSol} alt='icon'/>}
                                    color='gray'
                                    fullWidth
                                >
                                    Solana
                                </Button>
                                <Button
                                    iconStart={<Image src={iconAptos} alt='icon'/>}
                                    color='gray'
                                    fullWidth
                                >
                                    Aptos
                                </Button>
                                <Button
                                    iconStart={<Image src={iconSui} alt='icon'/>}
                                    color='gray'
                                    fullWidth
                                >
                                    Sui
                                </Button>
                            </div>
                        </Box>
                    </CardBody>
                    <div className={css.chainItemsTitle}>
                        <Typography variant='p'>
                            Wallet list
                        </Typography>
                    </div>
                    <div className={css.chainItems}>
                        {
                            [...Array(10)].map((_, index) =>
                                <ChainItem key={index} active/>
                            )
                        }
                    </div>
                </div>
                <CardFooter className={css.cardFooter}>
                    <Button color='gray' className={css.buttonSave}>Save</Button>
                </CardFooter>
            </Card>

            <Card
                className={[
                    css.card,
                    css.cardEmpty,
                    activeTab === 'project' &&
                    css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image src={iconProject} alt='icon' />
                        Project
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Box className={[css.cardBlock, css.cardBlockProject].join(' ')}>
                            <Typography variant='p' className={css.cardProjectTitle}>Add your project</Typography>
                            <Typography variant='p' className={css.cardProjectDescription} color='gray'>We recommend an image of at least 300x300. Gift work too. Max 5 mb.</Typography>
                            <Image
                                className={css.cardProjectFigure}
                                src={cardProjectFigure}
                                alt='figure'
                            />
                            <Stack className={css.cardProjectButtons} gap={.5} fullWidth>
                                <Button color='gray' className={css.cardProjectButton}>Add project</Button>
                                <Button color='gray' className={css.cardProjectButton}>More info</Button>
                            </Stack>
                        </Box>
                    </CardBody>
                </div>
            </Card>
            
        </div>
    </Container>
}