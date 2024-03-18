import { Box } from '@radix-ui/themes'

import css from './index.module.scss'


interface IBottom extends React.HTMLAttributes<HTMLDivElement>{}


export default function Bottom(props: IBottom) {
    const className = [
        css.bottom,
        props.className
    ].join(' ')

    return <Box
        className={className}
    >
        {props.children}
    </Box>
}
