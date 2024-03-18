'use client'
import Card from "@/shared/ui/Card"

import { PiFlagBannerFill } from "react-icons/pi"

import { useTasksPlatform } from "@/entities/task/api"
import CardTaskPlatform from "@/entities/task/ui/CardTaskPlatform"

import sortTasks from './utils'


export default function CardPlatformTaskList() {

    const {data} = useTasksPlatform()

    return <Card.Root value="platform" tabulated>
        <Card.Head><PiFlagBannerFill/>Mission platform</Card.Head>
        <Card.Body>
            {
                data ? sortTasks(data).map((task, index) =>
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