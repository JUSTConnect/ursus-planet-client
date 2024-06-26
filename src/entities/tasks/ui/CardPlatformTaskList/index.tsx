'use client'
import Card from "@/shared/ui/Card"

import { PiFlagBannerFill } from "react-icons/pi"

import { ITasksPlatform } from "@/entities/tasks/model"
import { useTasksPlatform } from "@/entities/tasks/api"
import CardTaskPlatform from "@/entities/tasks/ui/CardTaskPlatform"

import sortTasks from '@/entities/tasks/utils/sortTasks'


export default function CardPlatformTaskList() {

    const {data} = useTasksPlatform()

    return <Card.Root value="platform" tabulated>
        <Card.Head><PiFlagBannerFill/>Mission platform</Card.Head>
        <Card.Body>
            {
                data ? sortTasks<ITasksPlatform>(data).map((task, index) =>
                    <CardTaskPlatform key={index} object={task}/>
                )
                :
                Array.from(Array(4)).map((_, index)=>
                    <CardTaskPlatform key={index}/>
                )
            }
        </Card.Body>
    </Card.Root> 
}