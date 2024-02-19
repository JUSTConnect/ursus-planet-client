import { useDispatch, useSelector } from 'react-redux'

import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

import { RootState } from '@/store'
import { setSeasonActive } from '@/features/tmp/tmpSlice'
import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'

import css from './index.module.scss'

import BlockSeason from './BlockSeason'
import BlockPrize from './BlockPrize'
import SectionEndGame from './BlockPrize/SectionEndGame'


export default function Block2() {
    const dispatch = useDispatch()
    const { seasonCurrent, seasonActive } = useSelector((state: RootState) => state.tmp)

    return <div className={css.wrapper}>
        <div className={css.bgDrop}></div>
        <Container className={css.sections}>
            <div className={css.sectionLeft}>
                <Typography className={css.heading} variant="h2">Main games</Typography>
                <div className={css.buttons}>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent + 1 === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={() => dispatch(setSeasonActive(seasonCurrent + 1))}
                        variant='blank'
                        size='lg'
                        iconStart={<GiNextButton />}
                        hovered={seasonCurrent + 1 !== seasonActive}
                    >
                        Upcoming season
                    </Button>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={() => dispatch(setSeasonActive(seasonCurrent))}
                        variant='blank'
                        size='lg'
                        iconStart={<FaPlay />}
                        animated
                        hovered={seasonCurrent !== seasonActive}
                    >
                        Current season
                    </Button>
                    <Button
                        className={[css.buttonSwitch, seasonCurrent - 1 === seasonActive && css.buttonSwitchActive].join(' ')}
                        onClick={() => dispatch(setSeasonActive(seasonCurrent - 1))}
                        variant="blank"
                        size='lg'
                        iconStart={<GiPreviousButton />}
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
                    className={[css.buttonMobileSwitch, seasonCurrent + 1 === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                    iconStart={<GiPreviousButton />}
                    onClick={() => dispatch(setSeasonActive(seasonCurrent + 1))}
                    variant='blank'
                >
                    Last season
                </Button>
                <Button
                    className={[css.buttonMobileSwitch, seasonCurrent === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                    onClick={() => dispatch(setSeasonActive(seasonCurrent))}
                    iconStart={<FaPlay />}
                    variant='blank'
                >
                    Current season
                </Button>
                <Button
                    variant='blank'
                    onClick={() => dispatch(setSeasonActive(seasonCurrent - 1))}
                    iconEnd={<GiNextButton />}
                    className={[css.buttonMobileSwitch, seasonCurrent - 1 === seasonActive && css.buttonMobileSwitchActive].join(' ')}
                >
                    Next season
                </Button>
            </div>
            <div className={css.sectionRight}>
                <BlockSeason />
                <BlockPrize />
            </div>
        </Container>
        <Container className={css.tabletEndGame}>
            <SectionEndGame />
        </Container>
    </div>
}