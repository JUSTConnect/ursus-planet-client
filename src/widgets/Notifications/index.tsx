import { Grid } from "@radix-ui/themes"
import { FaList, FaBell } from "react-icons/fa";

import CardNotificationList from "@/entities/notifications/ui/CardNotificationList";
import CardUserUpdateSubscriptions from "@/entities/user/ui/CardUserUpdateSubscriptions";
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
                <CardNotificationList />
                <CardUserUpdateSubscriptions />
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
