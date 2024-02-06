import Image from 'next/image'

import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";

import Typography from '@/components/core/Typography'
import Box from '@/components/core/Box'

import css from './index.module.scss'
import iconPrize from './img/icon-prize.png'

import UnitValue from '../UnitValue';
import BlockHeading from '../HeadingBlock';
import SectionNFT from './SectionNFT';
import SectionEndGame from './SectionEndGame';
import UnitNFTRaffle from './UnitNFTRaffle';


export default function BlockPrize() {
    return <div className={css.blockPrize}>
        <BlockHeading
            title='Game prize'
            icon={iconPrize}
        />
        <Box className={css.grid}>
            <Box>
                <UnitNFTRaffle/>
                <UnitValue
                    title='Win list'
                    value='1'
                    icon={<FaTrophy/>}
                />
                <SectionEndGame/>
            </Box>
            <Box>
                <Box className={css.nftRaffleTablet}>
                    <UnitNFTRaffle/>
                </Box>
                <SectionNFT/>
            </Box>
            <Box>
                <Box className={css.winListTablet}>
                    <UnitValue
                        title='Win list'
                        value='1'
                        icon={<FaTrophy/>}
                    />
                </Box>
                <UnitValue
                    title='Participants'
                    value='100'
                    icon={<FaStar/>}
                />
                <UnitValue
                    title='Base coin'
                    value='MATIC'
                    icon={<FaGem/>}
                />
                <UnitValue
                    title='Start price'
                    value='0.01'
                    icon={<LiaCoinsSolid/>}
                />
            </Box>
        </Box>
    </div>
}