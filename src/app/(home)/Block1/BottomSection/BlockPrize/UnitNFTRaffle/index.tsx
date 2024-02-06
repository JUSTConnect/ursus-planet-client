import { memo } from "react";

import Box from "@/components/core/Box";
import Typography from "@/components/core/Typography";

import css from './index.module.scss'


function UnitNFTRaffle() {
    return <Box className={css.section}>
        <Typography variant='p'>
            <Typography variant='h4' className={css.nft}>
                NFT
            </Typography>
            &nbsp;&nbsp;&nbsp;Raffle
        </Typography>
    </Box>
}


export default memo(UnitNFTRaffle)