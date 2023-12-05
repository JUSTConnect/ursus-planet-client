import Image from 'next/image'


import css from '../index.module.scss'
import indexCss from './index.module.scss'
import iconCurrent from '../img/block-2-current.png'
import iconNext from '../img/block-2-next.png'
import iconPrev from '../img/block-2-prev.png'
import iconSeason from '../img/block-2-season.png'
import iconGamePrize from '../img/block-2-game-prize.png'


import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Stack from '@/components/core/Stack'


export default function Block2() {
    return <Container className={indexCss.sections}>
        <div className={indexCss.sectionLeft}>
            <Typography variant="h2" className={indexCss.heading}>Main games</Typography>
            <div className={indexCss.buttons}>
                <Button
                    className={
                        [
                            indexCss.buttonSwitch,
                            indexCss.buttonPrevNext
                        ].join(' ')
                    }
                    variant='blank'
                    size='lg'
                    iconStart={<Image src={iconNext} alt="icon" />}
                >
                    Upcoming season
                </Button>
                <Button
                    className={[indexCss.buttonSwitch, indexCss.buttonCurrent].join(' ')}
                    color='dark'
                    size='lg'
                    iconStart={<Image src={iconCurrent} alt="icon" />}
                >
                    Current season
                </Button>
                <Button
                    className={
                        [
                            indexCss.buttonSwitch,
                            indexCss.buttonPrevNext
                        ].join(' ')
                    }
                    variant="blank"
                    size='lg'
                    iconStart={<Image src={iconPrev} alt="icon" />}
                >
                    Last season
                </Button>
            </div>
        </div>
        <div className={indexCss.sectionRight}>
            <div className={indexCss.buttonsMobile}>
                <Button
                    className={
                        [
                            indexCss.buttonSwitchMobile,
                            indexCss.buttonPrevNextMobile
                        ].join(' ')
                    }
                    variant='blank'
                    iconStart={<Image className={indexCss.buttonSwitchIcon} src={iconNext} alt="icon" />}
                >
                    Upcoming season
                </Button>
                <Button
                    className={[indexCss.buttonSwitchMobile, indexCss.buttonCurrentMobile].join(' ')}
                    color='dark'
                    iconStart={<Image className={indexCss.buttonSwitchIcon} src={iconCurrent} alt="icon" />}
                >
                    Current season
                </Button>
                <Button
                    className={
                        [
                            indexCss.buttonSwitchMobile,
                            indexCss.buttonPrevNextMobile
                        ].join(' ')
                    }
                    variant="blank"
                    iconStart={<Image className={indexCss.buttonSwitchIcon} src={iconPrev} alt="icon" />}
                >
                    Last season
                </Button>
            </div>
            <div className={indexCss.sectionRightStack}>
                <div>
                    <Typography variant="h2" color='neutral'>
                        <Stack alignCenter className={indexCss.sectionRightHeading}>
                            <Image
                                className={indexCss.sectionRightHeadingIcon}
                                src={iconSeason}
                                alt='icon'
                            />
                            Season 22
                        </Stack>
                    </Typography>
                    <p>soon...</p>
                </div>
                <div>
                    <Typography variant="h2" color='neutral'>
                        <Stack alignCenter className={indexCss.sectionRightHeading}>
                            <Image
                                className={indexCss.sectionRightHeadingIcon}
                                src={iconGamePrize}
                                alt='icon'
                            />
                            Game prize
                        </Stack>
                    </Typography>
                    <p>soon..</p>
                </div>
            </div>
        </div>
    </Container>
}