import { useSelector } from 'react-redux'
import {
    Box,
    Flex,
    Text
} from '@radix-ui/themes'
import { IoIosRocket } from 'react-icons/io'
import { MdAccessTimeFilled } from 'react-icons/md'
import { IoTrophy } from 'react-icons/io5'

import { RootState } from '@/store'
import SectionHeading from './SectionHeading'
import SectionValue from './SectionValue'

import css from './index.module.scss'
import iconSeason from './img/icon-season.svg'


export default function SectionSeason() {
    const { seasonActive } = useSelector((state: RootState) => state.tmp)

    return <Box className={css.section}>
        <SectionHeading icon={iconSeason}>
            Season {seasonActive}
        </SectionHeading>
        <Flex className={css.sectionBlock} direction='column' gap='4'>
            <Flex gap='3' className={'lxs'} align='center'>
                <Text size='6'>NFT</Text>
                <Text>Raffle</Text>
            </Flex>
            <SectionValue
                className={'lxs'}
                name='Win list'
                value='1 player'
                icon={IoTrophy}
            />
            <SectionValue
                name='Game start date'
                value='13 March 2024 00:01'
                icon={IoIosRocket}
            />
            <SectionValue
                name='Base time of game'
                value='24h'
                icon={MdAccessTimeFilled}
            />
            <SectionValue
                name='Increase time'
                value='1H'
                icon={MdAccessTimeFilled}
            />
        </Flex>
    </Box>
}