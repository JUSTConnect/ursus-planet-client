import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'


import css from './index.module.scss'
import iconCurrent from './img/block-2-current.png'
import iconNext from './img/block-2-next.png'
import iconPrev from './img/block-2-prev.png'
import iconSeason from './img/icon-season.svg'
import iconGamePrize from '../../img/block-2-game-prize.png'
import IconLast from './img/IconLast'
import IconCurrent from './img/IconCurrent'
import IconUpcoming from './img/IconUpcoming'


import { RootState } from '@/store'
import { setSeasonActive } from '@/features/tmp/tmpSlice'
import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Stack from '@/components/core/Stack'


export default function Block2() {
    const dispatch = useDispatch()
    const {seasonCurrent, seasonActive, seasonAvailable} = useSelector((state: RootState) => state.tmp)

    return <div className={css.wrapper}>
        <div className={css.bgDrop}></div>
        <Container className={css.sections}>
            <div className={css.sectionLeft}>
                <Typography className={css.heading} variant="h2">Main games</Typography>
                <div className={css.buttons}>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent + 1 === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={ () => dispatch(setSeasonActive(seasonCurrent+1)) }
                        variant='blank'
                        size='lg'
                        iconStart={<IconUpcoming />}
                        hovered={seasonCurrent + 1 !== seasonActive}
                    >
                        Upcoming season
                    </Button>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={ () => dispatch(setSeasonActive(seasonCurrent)) }
                        variant='blank'
                        size='lg'
                        iconStart={<IconCurrent />}
                        animated
                        hovered={seasonCurrent !== seasonActive}
                    >
                        Current season
                    </Button>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent - 1 === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={ () => dispatch(setSeasonActive(seasonCurrent-1)) }
                        variant="blank"
                        size='lg'
                        iconStart={<IconLast />}
                        hovered={seasonCurrent - 1 !== seasonActive}
                    >
                        Last season
                    </Button>
                </div>
            </div>
        
            <div className={css.buttonsMobile}>
                <div className={css.buttonsMobileBgDropTop}></div>
                <div className={css.buttonsMobileBgDrop}></div>
                <Button 
                    className={[css.buttonMobileSwitch, seasonCurrent+1 === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                    iconStart={<IconLast />}
                    onClick={ () => dispatch(setSeasonActive(seasonCurrent+1)) }
                    variant='blank'
                >
                    Last season
                </Button>
                <Button 
                    className={[css.buttonMobileSwitch, seasonCurrent === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                    onClick={ () => dispatch(setSeasonActive(seasonCurrent)) }
                    iconStart={<IconCurrent />}
                    color='dark'
                >
                    Current season
                </Button>
                <Button 
                    variant='blank'
                    onClick={ () => dispatch(setSeasonActive(seasonCurrent-1)) }
                    iconEnd={<IconUpcoming />}
                    className={[css.buttonMobileSwitch, seasonCurrent-1 === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                >
                    Next season
                </Button> 
            </div>
            <div className={css.sectionRight}>
                <div className={css.blockSeason}>
                    <Typography className={css.heading} variant="h2" color='neutral'>
                        <Stack alignCenter>
                            <Image

                                className={css.headingIcon}
                                src={iconSeason}
                                alt='icon'
                            />
                            Season {seasonActive}
                        </Stack>
                    </Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta, quod accusantium harum neque error explicabo fugit facere magni quo, quae distinctio quas? Ducimus doloribus voluptas, laudantium rem aliquam fugiat!</p>
                </div>
                <div className={css.blockPrize}>
                    <Typography className={css.heading} variant="h2" color='neutral'>
                        <Stack alignCenter>
                            <Image
                                className={css.headingIcon}
                                src={iconGamePrize}
                                alt='icon'
                            />
                            Game prize
                        </Stack>
                    </Typography>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reprehenderit nulla repellendus placeat sequi earum, ex necessitatibus veniam nemo similique iure distinctio culpa maxime eius tempora possimus nesciunt commodi quidem.</p>
                </div>
            </div>

        </Container>
    </div>
}