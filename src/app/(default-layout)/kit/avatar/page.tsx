import Container from "@/components/core/Container";
import Avatar from "@/components/Avatar";
import Stack from "@/components/core/Stack";
import Scroller from "@/components/core/Scroller";

import avatar from './avatar.jpg'


export default function AvatarKit() {
    return <Container>
        <Scroller>
            <Stack maxContent>
                <Avatar src={avatar}/>
                <Avatar/>
            </Stack>
        </Scroller>
    </Container>
}