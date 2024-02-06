import { memo } from "react"

import Box from "@/components/core/Box"
import Button from "@/components/core/Button"
import Typography from "@/components/core/Typography"

import css from './index.module.scss'


function SectionEndGame() {
    return <Box className={css.section}>
        <Typography variant='p'>
            end game
        </Typography>
        <div className={css.bar}>
            <div></div>
        </div>
        <Button fullWidth>Enter</Button>
    </Box>
}


export default memo(SectionEndGame)