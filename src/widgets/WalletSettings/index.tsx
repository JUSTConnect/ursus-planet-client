import { Grid } from "@radix-ui/themes"
import { FaCircleUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import CardWalletsPlayerUpdate from "@/entities/wallets/ui/CardWalletsPlayerUpdate";
import CardWalletsProjectUpdate from "@/entities/wallets/ui/CardWalletsProjectUpdate";
import Card from "@/shared/ui/Card"
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


export default function UserWallets() {
    return <Container>
        <Card.TabsProvider size='md' defaultValue='avatar'>
            <Card.Tabs tabulated>
                <Card.Tab value='player'><FaCircleUser />Player</Card.Tab>
                <Card.Tab value='project'><FaEdit />Project</Card.Tab>
            </Card.Tabs>
            <Grid
                className={css.cards}
                columns={{
                    md: '2'
                }}
                gap='5'
            >
                <CardWalletsPlayerUpdate />
                <CardWalletsProjectUpdate />
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
