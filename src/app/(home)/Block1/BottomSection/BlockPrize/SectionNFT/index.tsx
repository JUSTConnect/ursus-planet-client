import { memo } from "react"
import Image from "next/image"
import { useSelector } from "react-redux"

import { RootState } from "@/store"
import Box from "@/components/core/Box"
import Typography from "@/components/core/Typography"

import css from './index.module.scss'
import nft1 from './img/nft-1.jpg'
import nft2 from './img/nft-2.jpg'
import nft3 from './img/nft-3.jpg'


function SectionNFT() {
    const seasonActive = useSelector((state: RootState) => state.tmp.seasonActive)

    return <Box className={css.wrapper}>
        <Typography className={css.smyth} variant='p'>
            {
                seasonActive === 1 && '100 - un'
            }
            {
                seasonActive === 2 && 'Smyth'
            }
            {
                seasonActive === 3 && '1000 x MATIC'
            }
        </Typography>
        <Box>
            <Image
                src={ seasonActive === 1 ? nft1 : seasonActive === 2 ? nft2 : nft3  }
                className={css.nft}
                alt='prize'
            />
        </Box>
        {
            seasonActive === 2 &&
                <Typography className={css.number} variant='p'>
                    #4323
                </Typography>
        }
    </Box>
}


export default memo(SectionNFT)