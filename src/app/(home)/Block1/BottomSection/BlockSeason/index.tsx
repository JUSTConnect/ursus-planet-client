import Image from 'next/image'
import { useSelector } from 'react-redux'

import { IoRocketSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

import css from './index.module.scss'
import iconSeason from './img/icon-season.svg'

import { RootState } from '@/store'
import Box from '@/components/core/Box';

import BlockHeading from '../HeadingBlock';
import UnitValue from '../UnitValue'
import UnitWinList from '../BlockPrize/UnitWinList';


export default function BlockSession() {
    const seasonActive = useSelector((state: RootState) => state.tmp.seasonActive)

    return <div className={css.blockSeason}>
        <BlockHeading
            title={`Season ${seasonActive}`}
            icon={iconSeason}
        />
        <Box className={css.unitWinList}>
            <UnitWinList/>
        </Box>
        <UnitValue
            title='Game start date'
            value='13 March 2024 00:01'
            icon={<IoRocketSharp/>}
        />
        <UnitValue
            title='Base time of game'
            value='24h'
            icon={<FaClock/>}
        />
        <UnitValue
            title='Increase time'
            value='1H'
            icon={<FaClock/>}
        />
    </div>
}