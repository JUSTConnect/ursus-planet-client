import { Box } from "@radix-ui/themes";
import c from "classnames";

import {useDropdown} from './context'

import css from './index.module.scss'


interface IItem extends React.HTMLAttributes<HTMLDivElement>{}


export default function Item(props: IItem) {

    const {setActive} = useDropdown()

    const className = c(
        css.item,
        props.className
    )

    return <Box
        onClick={() => setActive(false)}
        {...props}
        className={className}
    >
        {props.children}
    </Box>
}