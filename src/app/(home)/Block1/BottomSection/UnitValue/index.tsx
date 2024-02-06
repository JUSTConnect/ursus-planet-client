import { memo } from "react"

import Box from "@/components/core/Box"
import Stack from "@/components/core/Stack"
import Typography from "@/components/core/Typography"

import css from './index.module.scss'


interface IUnitValue
{
    icon: React.ReactNode
    title: string
    value: string
}


function UnitValue(props: IUnitValue) {
    return <Stack alignCenter className={css.wrapper}>
        <Box className={css.icon}>
            {props.icon}
        </Box>
        <Box>
            <Typography variant='p' className={css.heading}>
                {props.title}
            </Typography>
            <Typography variant='h4' className={css.value}>
                {props.value}
            </Typography>
        </Box>
    </Stack>
}


export default memo(UnitValue)