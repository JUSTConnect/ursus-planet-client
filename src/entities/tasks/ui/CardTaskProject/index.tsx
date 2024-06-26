'use client'
import { useState } from "react";
import Link from "next/link"
import { Box, Tooltip, Text } from "@radix-ui/themes";
import c from "classnames"

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaClock } from "react-icons/fa";

import { useTasksCustomGetReward, useTasksCustomCheck } from "@/entities/tasks/api/mutation";
import { ITasksProject } from "@/entities/tasks/model";
import { useToast } from "@/shared/ui/Toast";
import AnimatedDots from "@/shared/ui/AnimatedDots";
import Button from "@/shared/ui/Button"

import CardTaskBase from '../CardTaskBase'
import Timer from './Timer'

import css from './index.module.scss'


interface ICardTaskProject {
    object?: ITasksProject
}


export default function CardTaskProject(props: ICardTaskProject) {
    
    const {fire} = useToast()
    const {mutateAsync} = useTasksCustomGetReward()
    const check = useTasksCustomCheck()

    const [active, setActive] = useState(false)
    const [checking, setChecking] = useState(false)
    const [checkAvailable, setCheckAvailable] = useState(false)

    const handleCheck = () => {
        setChecking(true)
        setTimeout(() => {
            props.object && check.mutateAsync({task_id: props.object?.id}).then(() => {
                fire({text: 'Task checked!'})
                setChecking(false)
            })
        }, (Math.random() * (60 - 5) + 5)*1000)
    }

    const handleGet = () => {
        props.object && mutateAsync({task_id: props.object?.id}).then(() =>
            fire({text: 'Task reward successfully collected!', type: 'success'})
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
                    { checkAvailable &&
                        <Button
                            onClick={handleCheck}
                            hoverToWhite
                            radius="normal"
                            disabled={checking}
                        >
                            <Text>
                                { checking ? <>Verifying<AnimatedDots/></> : 'Verify' }
                            </Text>
                        </Button>
                    }
                    <Link target="_blank" href={props.object?.link||'#'} className={css.button}>
                        <Tooltip
                            content={
                                <>
                                    this task expires in {props.object?.expiration && <Timer date={props.object.expiration}/>}
                                </>
                            }
                            hidden={!props.object?.expiration}
                        >
                            <Button
                                onClick={() => setTimeout( () => setCheckAvailable(true), 1000)}
                                radius="normal"
                                color="white"
                                fullWidth
                            >
                                {
                                    props.object?.expiration &&
                                        <FaClock/>
                                }
                                Do it
                            </Button>
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
                    {props.object?.description}
                </Box>
        }
    </CardTaskBase>
}