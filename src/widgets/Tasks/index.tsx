import { Grid } from "@radix-ui/themes"

import { IoIosAlarm } from "react-icons/io";
import { PiFlagBannerFill } from "react-icons/pi";

import CardPlatformTaskList from "@/entities/tasks/ui/CardPlatformTaskList";
import CardProjectTaskList from "@/entities/tasks/ui/CardProjectTaskList";
import Card from "@/shared/ui/Card"
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


export default function Tasks() {
    return <Container>
        <Card.TabsProvider size='md' defaultValue='platform'>
            <Card.Tabs tabulated>
                <Card.Tab value='platform'>
                    <PiFlagBannerFill />Mission platform
                </Card.Tab>
                <Card.Tab value='project'>
                    <IoIosAlarm />
                    Mission project
                </Card.Tab>
            </Card.Tabs>
            <Grid
                className={css.cards}
                columns={{
                    md: '2'
                }}
                gap='5'
            >
                <CardPlatformTaskList/>
                <CardProjectTaskList/>
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
