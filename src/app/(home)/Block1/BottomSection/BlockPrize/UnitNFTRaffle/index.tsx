import { memo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import Box from "@/components/core/Box";
import Typography from "@/components/core/Typography";

import css from './index.module.scss'


function UnitNFTRaffle() {
    const seasonActive = useSelector((state: RootState) => state.tmp.seasonActive)

    return <Box className={css.section}>
        <Typography variant='p'>
            <Typography variant='h4' className={css.nft}>
                {
                    seasonActive === 1 && 'WL'
                }
                {
                    seasonActive === 2 && 'NFT'
                }
                {
                    seasonActive === 3 && 'Coin'
                }
            </Typography>
            &nbsp;&nbsp;&nbsp;
            {
                seasonActive === 1 && 'Airdrop'
            }
            {
                seasonActive === 2 && 'Raffle'
            }
            {
                seasonActive === 3 && 'Airdrop'
            }
        </Typography>
    </Box>
}


export default memo(UnitNFTRaffle)