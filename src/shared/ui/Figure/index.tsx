import Image, {StaticImageData} from "next/image";
import {
    Box
} from "@radix-ui/themes";
import c from 'classnames'

import css from './index.module.scss'


interface IFigure extends React.ComponentProps<typeof Box>
{
    src: StaticImageData
    children?: never
}


export default function Figure({src, className, ...props}: IFigure) {

    const cn = c(
        className,
        css.wrapper
    )

    return <Box {...props} className={cn}>
        <Image
            className={css.figure}
            src={src}
            alt="figure"
        />
    </Box>
}