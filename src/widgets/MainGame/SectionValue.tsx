import {
    Flex,
    Box,
    Text
} from "@radix-ui/themes"
import { type IconType } from "react-icons/lib"

import css from './index.module.scss'


interface ISectionValue
{
    name: string
    value: string
    icon: IconType
    className?: string
}


export default function SectionValue(props: ISectionValue) {
    return <Flex
        className={props.className}
        align='center'
        gap='3'
    >
    <Box>
        <props.icon className={css.valueIcon} />
    </Box>
    <Box>
        <Text as='p'>{props.name}</Text>
        <Text as='p' size='5'>{props.value}</Text>
    </Box>
</Flex>
}