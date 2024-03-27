import Card from "@/shared/ui/Card"

import { IoIosAlarm } from "react-icons/io"

import CardTaskProject from '../CardTaskProject'

import {tasks} from './fixtures'


export default function CardProjectTaskList() {
    return <Card.Root value="project" tabulated>
        <Card.Head><IoIosAlarm/>Mission project</Card.Head>
        <Card.Body>
            {
                tasks.map((_, index) =>
                    <CardTaskProject object={_} key={index}/>
                )
            }
        </Card.Body>
    </Card.Root> 
}