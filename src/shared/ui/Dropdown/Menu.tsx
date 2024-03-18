import { Box } from '@radix-ui/themes'
import c from 'classnames'

import {useDropdown} from './context'


import css from './index.module.scss'


interface IDropdownMenu extends React.HTMLAttributes<HTMLDivElement>{}


export default function DropdownMenu(props: IDropdownMenu) {

    const {active} = useDropdown()

    const className = c(
        css.menu,
        props.className,
        active && css.menuActive
    )

    return <Box className={className}>
        <Box className={css.menuCard}>
            {props.children}
        </Box>
    </Box>
}