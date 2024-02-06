import { memo } from "react";
import Image, { StaticImageData } from "next/image";

import Typography from "@/components/core/Typography";
import Stack from "@/components/core/Stack";

import css from './index.module.scss'


interface IBlockHeading
{
    title: string
    icon: StaticImageData
}


function HeadingBlock(props: IBlockHeading) {
    return <Typography className={css.heading} variant="h2">
        <Stack alignCenter>
            <Image

                className={css.headingIcon}
                src={props.icon}
                alt='icon'
            />
            {props.title}
        </Stack>
    </Typography>
}


export default memo(HeadingBlock)