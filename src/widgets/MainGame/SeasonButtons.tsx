import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Flex
} from "@radix-ui/themes"
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa6";
import c from "classnames";

import { RootState } from "@/store";
import { setSeasonActive } from "@/features/tmp/tmpSlice";
import Button from "@/shared/ui/Button"

import css from './index.module.scss'


export default function SeasonButtons() {
    const dispatch = useDispatch()
    const { seasonCurrent, seasonActive } = useSelector((state: RootState) => state.tmp)

    return <Flex
        className={css.buttonsSeason}
        align='start'
        justify='center'
        gap='2'
        direction={{
            md: 'column'
        }}
    >
        <Box className={css.buttonsSeasonDrop}/>
        <Box>
            <Button
                onClick={() => dispatch(setSeasonActive(seasonCurrent + 1))}
                className={c(css.buttonSeason, seasonCurrent + 1 === seasonActive && css.buttonSeasonActive)}
                variant="ghost"
                size='lg'
            >
                <GiNextButton/>
                Upcoming season
            </Button>
        </Box>
        <Box>
            <Button
                onClick={() => dispatch(setSeasonActive(seasonCurrent))}
                className={c(css.buttonSeason, seasonCurrent === seasonActive && css.buttonSeasonActive)}
                size='lg'
            >
                <FaPlay/>
                Current season
            </Button>
        </Box>
        <Box>
            <Button
                onClick={() => dispatch(setSeasonActive(seasonCurrent - 1))}
                className={c(css.buttonSeason, seasonCurrent - 1 === seasonActive && css.buttonSeasonActive)}
                size='lg'
            >
                <GiPreviousButton/>
                Last season
            </Button>
        </Box>
    </Flex>
}