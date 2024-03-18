'use client'
import Link from "next/link"
import c from "classnames"

import { useToast } from "@/shared/ui/Toast"
import { ITasksPlatform } from "@/entities/task/model"
import { useTasksPlatformGetReward } from "@/entities/task/api"
import Button from "@/shared/ui/Button"

import CardTaskBase from '../CardTaskBase'

import css from './index.module.scss'


interface ICardTaskPlatform {
    object?: ITasksPlatform
}


export default function CardTaskPlatform(props: ICardTaskPlatform) {

    const { fire } = useToast()
    const { mutateAsync } = useTasksPlatformGetReward()

    const handleGet = () => {
        props.object && mutateAsync({ task_name: props.object?.name }).then(() =>
            fire({ text: `Collected ${props.object?.log?.reward} points from task - "${props.object?.title}"!` })
        )
    }

    return <CardTaskBase
        object={props.object}
        buttons={
            !props.object?.log ?
                <Link href={props.object?.link||'#'} className={css.button}>
                    <Button
                        radius="normal"
                        color="white"
                        fullWidth
                    >
                        Do it
                    </Button>
                </Link>
                :
                <>
                    {
                        !props.object?.log.got ?
                            <Button
                                onClick={handleGet}
                                className={c(css.button, css.buttonGet)}
                                radius="normal"
                                color="white"
                            >
                                Get
                            </Button>
                            :
                            <Button
                                className={css.button}
                                radius="normal"
                                color="gray"
                                disabled
                            >
                                Done
                            </Button>
                    }
                </>
        }
    />
}