import Image, { StaticImageData } from "next/image"
import {
    Flex,
    Heading
} from "@radix-ui/themes"

import css from './index.module.scss'


interface ISectionHeading
{
    icon: StaticImageData
    children: React.ReactNode
}


export default function SectionHeading(props: ISectionHeading) {
    return <Flex
        align='center'
        gap='3'
        mb='5'
    >
        <Image
            className={css.sectionHeadingIcon}
            src={props.icon}
            alt='icon'
        />
        <Heading
            className={css.sectionHeading}
            size='8'
        >{props.children}</Heading>
    </Flex>
}