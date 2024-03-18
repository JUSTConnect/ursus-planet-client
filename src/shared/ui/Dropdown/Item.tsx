import { Box } from "@radix-ui/themes";
import c from "classnames";

import css from './index.module.scss'


interface IItem extends React.HTMLAttributes<HTMLDivElement>{}


export default function Item(props: IItem) {

    const className = c(
        css.item,
        props.className
    )

    return <Box
        {...props}
        className={className}
    >
        {props.children}
    </Box>
}