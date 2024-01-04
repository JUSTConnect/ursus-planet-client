import Image, { StaticImageData } from 'next/image'

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
    figure: string
    icon: StaticImageData
    connected: boolean
}


const sections: Section[] = [
    {
        title: 'Discord',
        figure: figureDiscord,
        connected: false,
        icon: iconButtonDiscord
    },
    {
        title: 'X',
        figure: figureX,
        connected: false,
        icon: iconButtonX
    },
    {
        title: 'Telegram',
        figure: figureTelegram,
        connected: false,
        icon: iconButtonTelegram
    },
    {
        title: 'Github',
        figure: figureGithub,
        connected: true,
        icon: iconButtonGithub
    }
]


export default function TabSocials() {
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
                            <div>
                                <Image className={css.cardSocialFigure} src={section.figure} alt='figure'/>
                                { section.connected ?
                                    <Stack gap={.5} className={css.cardSocialForm} fullWidth alignCenter>
                                        <Input
                                            fullWidth
                                            defaultValue='Stiven38324234'
                                            iconStart={<Image src={iconOk} alt='icon'/>}
                                        />
                                        <div>
                                            <ButtonIcon className={css.cardSocialButtonIcon} color='gray'>
                                                <Image src={iconReload} alt='icon'/>
                                            </ButtonIcon>
                                        </div>
                                        <div>
                                            <ButtonIcon className={css.cardSocialButtonIcon} color='gray'>
                                                <Image src={iconDelete} alt='icon'/>
                                            </ButtonIcon>
                                        </div>
                                    </Stack>
                                :
                                    <Button
                                    className={css.cardSocialButton}
                                    iconStart={<Image src={section.icon} alt='icon'/>}
                                    color='dark'
                                    animated
                                    >
                                        Connect account
                                    </Button>
                                }
                            </div>
                        </CardBody>
                    </Card>
                )
            }
        </Box>
    </Container>
}