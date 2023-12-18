import Image from 'next/image'


import css from './index.module.scss'
import iconCurrent from './img/block-2-current.png'
import iconNext from './img/block-2-next.png'
import iconPrev from './img/block-2-prev.png'
import iconSeason from '../../img/block-2-season.png'
import iconGamePrize from '../../img/block-2-game-prize.png'


import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import Stack from '@/components/core/Stack'


export default function Block2() {
    return <div className={css.wrapper}>
        <div className={css.bgDrop}></div>
        <Container className={css.sections}>
            <div className={css.sectionLeft}>
                <Typography className={css.heading} variant="h2">Main games</Typography>
                <div className={css.buttons}>
                    <Button
                        className={css.buttonNext}
                        variant='blank'
                        size='lg'
                        iconStart={<Image src={iconNext} alt="icon" />}
                    >
                        Upcoming season
                    </Button>
                    <Button
                        className={css.buttonCurrent}
                        color='dark'
                        size='lg'
                        iconStart={<Image src={iconCurrent} alt="icon" />}
                    >
                        Current season
                    </Button>
                    <Button
                        className={css.buttonPrev}
                        variant="blank"
                        size='lg'
                        iconStart={<Image src={iconPrev} alt="icon" />}
                    >
                        Last season
                    </Button>
                </div>
            </div>
        
            <div className={css.buttonsMobile}>
                <div className={css.buttonsMobileBgDropTop}></div>
                <div className={css.buttonsMobileBgDrop}></div>
                <Button 
                    className={css.buttonMobilePrev}
                    iconStart={<Image src={iconPrev} alt="icon" />}
                    variant='blank'
                >
                    Last season
                </Button>
                <Button 
                    className={css.buttonMobileCurrent}
                    iconStart={<Image src={iconCurrent} alt="icon" />}
                    color='dark'
                >
                    Current season
                </Button>
                <Button 
                    variant='blank'
                    iconEnd={<Image src={iconNext} alt="icon" />}
                    className={css.buttonMobileNext}
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
                            Season 22
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