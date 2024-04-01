import {
    Text
} from "@radix-ui/themes"
import { FaList } from "react-icons/fa"

import Card from "@/shared/ui/Card"


export default function CardMeNotificationList() {

    return <Card.Root tabulated value="notifications">
        <Card.Head>
            <FaList /> Notifications
        </Card.Head>
        <Card.Body>
            <Text my='5' size='5' color='gray' as="p" align='center'>Nothing is here yet!</Text>
        </Card.Body>
    </Card.Root>
}
