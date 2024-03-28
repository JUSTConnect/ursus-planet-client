'use client'
import Card from "@/shared/ui/Card"

import { IoIosAlarm } from "react-icons/io"

import { ITasksProject } from "@/entities/tasks/model"
import { useTasksCustom } from "@/entities/tasks/api/query"
import sortTasks from "@/entities/tasks/utils/sortTasks"

import CardTaskProject from '../CardTaskProject'


export default function CardProjectTaskList() {

    const {data} = useTasksCustom()

    return <Card.Root value="project" tabulated>
        <Card.Head><IoIosAlarm/>Mission project</Card.Head>
        <Card.Body>
            {
                data ? sortTasks<ITasksProject>(data.results).map((object, index) =>
                    <CardTaskProject object={object} key={index}/>
                )
                :
                Array.from(Array(4)).map((_, index)=>
                    <CardTaskProject key={index}/>
                )
            }
        </Card.Body>
    </Card.Root> 
}