'use client'
import { useState } from "react";
import Link from "next/link"
import { Box, Tooltip } from "@radix-ui/themes";
import c from "classnames"
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaClock } from "react-icons/fa";

import { useToast } from "@/shared/ui/Toast"
import { ITasksProject } from "@/entities/task/model"
import { useTasksPlatformGetReward } from "@/entities/task/api"
import Button from "@/shared/ui/Button"

import CardTaskBase from '../CardTaskBase'

import css from './index.module.scss'


interface ICardTaskPlatform {
    object?: ITasksProject
}


export default function CardTaskPlatform(props: ICardTaskPlatform) {

    const [active, setActive] = useState(false)
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
                <>
                    <Button
                        onClick={() => setActive(!active)}
                        radius="normal"
                        color="dark"
                        icon
                    >
                        {
                            active ?
                                <GoChevronUp/>
                            :
                                <GoChevronDown/>
                        }
                    </Button>
                    <Link href={props.object?.link||'#'} className={css.button}>
                        <Tooltip content={`this task expires at ${props.object?.expiration}`}>
                            <Box>
                                <Button
                                    radius="normal"
                                    color="white"
                                    fullWidth
                                >
                                    <FaClock/>Do it
                                </Button>
                            </Box>
                        </Tooltip>
                    </Link>
                </>
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
    >
        {
            active &&
                <Box mt='4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci omnis repellendus quia odit nobis officia qui fugiat repellat consequuntur! Eos quasi fugiat repudiandae perspiciatis necessitatibus fuga dolorem sit corporis veniam.
                </Box>
        }
    </CardTaskBase>
}