import Link from 'next/link'
import { memo } from 'react'

import { ITasksPlatformLog } from '@/hooks/react-query/tasks'
import Box from '@/components/core/Box'
import Stack from '@/components/core/Stack'
import Button from '@/components/core/Button'

import css from './index.module.scss'


interface IItem
{
    title: string
    reward: number
    link?: string
    log: ITasksPlatformLog
}


function Item(props: IItem) {
    return <Box className={css.item}>
        <Stack fullWidth>
            <Box>
                {props.title} - <span className={css.points}>{props.reward} points</span>
            </Box>
        </Stack>
        <Box className={css.buttons}>
            <Stack fullWidth></Stack>
            {

                !props.log.user ?
                    <Link className={css.button} href={props.link||'#'}>
                        <Box className={css.button}>
                            <Button fullWidth hovered color='white'>Do it</Button>
                        </Box>
                    </Link>
                :
                !props.log.got ?
                    <Box className={css.button}>
                        <Button fullWidth hovered color='warning'>Get</Button>
                    </Box>
                :
                    <Box className={css.button}>
                        <Button fullWidth hovered color='gray' disabled>Done</Button>
                    </Box>
            }
        </Box>
    </Box>
}


export default memo(Item)