import { Grid } from "@radix-ui/themes"
import { FaCircleUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import CardUserUpdate from "@/entities/user/ui/CardUserUpdate"
import CardUserUpdateAvatar from "@/entities/user/ui/CardUserUpdateAvatar"
import Card from "@/shared/ui/Card"
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


export default function UserProfile() {
    return <Container>
        <Card.TabsProvider size='md' defaultValue='avatar'>
            <Card.Tabs tabulated>
                <Card.Tab value='avatar'><FaCircleUser />Avatar</Card.Tab>
                <Card.Tab value='profile'><FaEdit />Profile</Card.Tab>
            </Card.Tabs>
            <Grid
                className={css.cards}
                columns={{
                    md: '2'
                }}
                gap='5'
            >
                <CardUserUpdateAvatar />
                <CardUserUpdate />
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
