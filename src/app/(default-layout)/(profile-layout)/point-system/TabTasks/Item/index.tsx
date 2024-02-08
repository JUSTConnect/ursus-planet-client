import { memo } from 'react'

import Box from '@/components/core/Box'
import Stack from '@/components/core/Stack'
import Button from '@/components/core/Button'

import css from './index.module.scss'


interface IItem
{
    title: string
    points: number
    done?: boolean
    connect?: boolean
    follow?: boolean
}


function Item(props: IItem) {
    return <Box className={css.item}>
        <Stack fullWidth>
            <Box>
                {props.title} - <span className={css.points}>{props.points} points</span>
            </Box>
        </Stack>
        <Box className={css.buttons}>
            {
                props.done ?
                <>
                    <Box className={css.button}>
                        <Stack fullWidth/>
                    </Box>
                    <Box className={css.button}>
                        <Button fullWidth hovered color='gray' disabled>Done</Button>
                    </Box>
                </>
                :
                <>
                    {
                        props.connect ?
                            <Box className={css.button}>
                                <Button fullWidth hovered color='white'>Connect</Button>
                            </Box>
                        :
                            <Box className={css.button}>
                                <Stack fullWidth/>
                            </Box>
                    }
                    {
                        props.follow ?
                            <Box className={css.button}>
                                <Button fullWidth hovered color='white'>Follow</Button>
                            </Box>
                        :
                            <Box className={css.button}>
                                <Button fullWidth hovered color='white'>Do it</Button>
                            </Box>
                    }
                </>
            }
        </Box>
    </Box>
}


export default memo(Item)