import { memo } from 'react'

import Box from '@/components/core/Box'

import css from './index.module.scss'


function Cards(props: React.HTMLAttributes<HTMLDivElement>) {
    return <Box className={css.cards}>
        {props.children}
    </Box>  
}


export default memo(Cards)