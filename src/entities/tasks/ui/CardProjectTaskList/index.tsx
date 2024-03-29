'use client'
import { Text } from "@radix-ui/themes"
import Card from "@/shared/ui/Card"

import { IoIosAlarm } from "react-icons/io"

import { ITasksProject } from "@/entities/tasks/model"
import { useTasksCustom } from "@/entities/tasks/api/query"
import sortTasks from "@/entities/tasks/utils/sortTasks"

import CardTaskProject from '../CardTaskProject'


export default function CardProjectTaskList() {

    const {data} = useTasksCustom()

    const filterExpired = (item: ITasksProject) => {
        return !item.expiration || (new Date(item?.expiration||'') > new Date()) || item.log
    }

    return <Card.Root value="project" tabulated>
        <Card.Head><IoIosAlarm/>Mission project</Card.Head>
        <Card.Body>
            {
                data ? <>
                    {
                        sortTasks<ITasksProject>(data.results).filter(filterExpired).length ?
                            sortTasks<ITasksProject>(data.results).filter(filterExpired).map((object, index) =>
                                <CardTaskProject object={object} key={index}/>
                            )
                        :
                            <Text
                                color="gray"
                                as="p"
                                size='4'
                                my='5'
                                align='center'
                            >
                                Nothing here
                            </Text>
                    }
                </> 
                :
                Array.from(Array(4)).map((_, index)=>
                    <CardTaskProject key={index}/>
                )
            }
        </Card.Body>
    </Card.Root> 
}