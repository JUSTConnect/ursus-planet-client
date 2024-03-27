import { Grid } from "@radix-ui/themes"
import { FaList, FaBell } from "react-icons/fa";

import CardMeNotificationList from "@/entities/notifications/ui/CardMeNotificationList";
import CardMeUpdateSubscriptions from "@/entities/notifications/ui/CardMeUpdateSubscriptions";
import Card from "@/shared/ui/Card"
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


export default function Notifications() {
    return <Container>
        <Card.TabsProvider size='md' defaultValue='notifications'>
            <Card.Tabs tabulated>
                <Card.Tab value='notifications'><FaList />Notifications</Card.Tab>
                <Card.Tab value='subscriptions'><FaBell />Subscriptions</Card.Tab>
            </Card.Tabs>
            <Grid
                className={css.cards}
                columns={{
                    md: '2'
                }}
                gap='5'
            >
                <CardMeNotificationList />
                <CardMeUpdateSubscriptions />
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
