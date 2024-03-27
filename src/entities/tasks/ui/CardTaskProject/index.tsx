'use client'
import { useState } from "react";
import Link from "next/link"
import { Box, Tooltip } from "@radix-ui/themes";
import { useTimer } from 'react-timer-hook';
import c from "classnames"

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaClock } from "react-icons/fa";

import { ITasksProject } from "@/entities/tasks/model";
import Button from "@/shared/ui/Button"

import CardTaskBase from '../CardTaskBase'

import css from './index.module.scss'


interface ICardTaskProject {
    object?: ITasksProject
}


export default function CardTaskProject(props: ICardTaskProject) {

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const {
        seconds,
        minutes,
        hours
    } = useTimer({expiryTimestamp: currentDate})
    const [active, setActive] = useState(false)

    const handleGet = () => {
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
                        <Tooltip content={`this task expires in ${hours}:${minutes}:${seconds}`}>
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