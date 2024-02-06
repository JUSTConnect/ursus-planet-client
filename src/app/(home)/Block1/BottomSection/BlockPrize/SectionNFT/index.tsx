import { memo } from "react"
import Image from "next/image"

import Box from "@/components/core/Box"
import Typography from "@/components/core/Typography"

import css from './index.module.scss'
import nft from './img/nft.jpg'


function SectionNFT() {
    return <Box className={css.wrapper}>
    <Typography className={css.smyth} variant='p'>
        Smyth
    </Typography>
    <Box>
        <Image
            src={nft}
            className={css.nft}
            alt='prize'
        />
    </Box>
    <Typography className={css.number} variant='p'>
        #4323
    </Typography>
</Box>
}


export default memo(SectionNFT)