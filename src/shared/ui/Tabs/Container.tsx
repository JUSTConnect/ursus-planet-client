import {
    Box,
    Flex
} from "@radix-ui/themes"
import { ScrollArea } from "@radix-ui/themes"
import BaseContainer from "@/shared/ui/Container"

import css from './index.module.scss'


interface IContainer {
    children: React.ReactNode
    bgDrop?: boolean
}


export default function Container(props: IContainer) {
    return <Box mb='5'>
        {
            props.bgDrop &&
                <div className={css.bgDrop}></div>
        }
        <ScrollArea>
            <BaseContainer>
                <Flex gap='3'>
                    {props.children}
                </Flex>
            </BaseContainer>
        </ScrollArea>
    </Box>
}