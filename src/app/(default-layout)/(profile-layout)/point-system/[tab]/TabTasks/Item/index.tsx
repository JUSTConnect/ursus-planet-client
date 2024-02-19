import Link from 'next/link'
import { memo } from 'react'

import { useTasksPlatformGetReward, useTasksPlatform } from '@/hooks/react-query/tasks'
import { useUsersSelf } from '@/hooks/react-query/users'
import { ITasksPlatformLog } from '@/hooks/react-query/tasks'
import Box from '@/components/core/Box'
import Stack from '@/components/core/Stack'
import Button from '@/components/core/Button'

import css from './index.module.scss'


interface IItem
{
    title: string
    name: string
    reward: number
    link?: string
    log: ITasksPlatformLog
}


function Item(props: IItem) {
    const {mutateAsync} = useTasksPlatformGetReward()
    const {refetch: refetchTasks} = useTasksPlatform()
    const {refetch: refetchUser} = useUsersSelf()

    const handleGet = () => {
        mutateAsync({task_name: props.name}).then(() => {
            refetchTasks()
            refetchUser()
        })
    }

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
                        <Button className={css.buttonGet} fullWidth hovered color='white' onClick={handleGet}>Get</Button>
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