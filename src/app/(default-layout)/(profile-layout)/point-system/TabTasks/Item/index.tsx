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
                    <Stack fullWidth/>
                    <Button className={css.button} hovered color='gray' disabled>Done</Button>
                </>
                :
                <>
                    {
                        props.connect ?
                            <Button className={css.button} hovered color='white'>Connect</Button>
                        :
                            <Stack fullWidth/>
                    }
                    {
                        props.follow ?
                            <Button className={css.button} hovered color='white'>Follow</Button>
                        :
                            <Button className={css.button} hovered color='white'>Do it</Button>
                    }
                </>
            }
        </Box>
    </Box>
}


export default memo(Item)