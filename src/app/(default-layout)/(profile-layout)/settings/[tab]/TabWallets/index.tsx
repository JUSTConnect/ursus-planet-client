'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoIosAlarm } from "react-icons/io";
import { PiFlagBannerFill } from "react-icons/pi";

import css from './index.module.scss'
import IconAptos from './img/IconAptos'
import cardProjectFigure from './img/card-project-figure.png'
import iconPlayer from './img/player.svg'
import iconProject from './img/project.svg'
import iconEth from './img/icon-eth.png'
import iconSol from './img/icon-sol.png'
import iconSui from './img/icon-sui.png'

import Box from '@/components/core/Box'
import { CardBody, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"
import Stack from '@/components/core/Stack'
import Typography from '@/components/core/Typography'
import {ICardTab} from '@/components/CardTabs'

import Card from '../../../Card'
import CardHead from '../../../CardHead'
import ChainItem from './ChainItem'
import CardTabs from '../../../CardTabs';
import Cards from '../../../Cards'


type TabName = 'player' | 'project'


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('player')
    const tabs: ICardTab[] = [
        {
            value: 'player',
            title: 'Player',
            icon: <IoIosAlarm/>
        },
        {
            value: 'project',
            title: 'Project',
            icon: <PiFlagBannerFill/>
        }
    ]

    return <Container className={css.container}>
        <CardTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <Cards>
            <Card
                active={activeTab==='player'}
            >
                <div>
                    <CardHead
                        title='Player'
                        icon={<IoIosAlarm/>}
                    />
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
                                    disabled
                                >
                                    Solana
                                </Button>
                                <Button
                                    iconStart={<IconAptos/>}
                                    color='gray'
                                    fullWidth
                                    disabled
                                >
                                    Aptos
                                </Button>
                                <Button
                                    iconStart={<Image src={iconSui} alt='icon'/>}
                                    color='gray'
                                    fullWidth
                                    disabled
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
                active={activeTab==='project'}
            >
                <div>
                    <CardHead
                        title='Project'
                        icon={<PiFlagBannerFill/>}
                    />
                    <CardBody className={css.cardBody}>
                        <Box className={[css.cardBlock, css.cardBlockProject].join(' ')}>
                            <Typography variant='p' className={css.cardProjectTitle}>Add your project</Typography>
                            <Typography variant='p' className={css.cardProjectDescription}>To display project settings, add your project</Typography>
                            <Image
                                className={css.cardProjectFigure}
                                src={cardProjectFigure}
                                alt='figure'
                            />
                            <Stack className={css.cardProjectButtons} gap={.5} fullWidth>
                                <Link href='https://forms.gle/mzmKtGQ4mqhVP6an8' className={css.cardProjectButton}>
                                    <Button color='gray'>Add project</Button>
                                </Link>
                                <Link href='https://docs-project.ursasplanet.com/' className={css.cardProjectButton}>
                                    <Button color='gray'>More info</Button>
                                </Link>
                            </Stack>
                        </Box>
                    </CardBody>
                </div>
            </Card>
        </Cards>
    </Container>
}