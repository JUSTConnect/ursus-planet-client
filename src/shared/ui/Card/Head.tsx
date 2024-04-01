import { Box } from '@radix-ui/themes'

import css from './index.module.scss'


interface IHead extends React.HTMLAttributes<HTMLDivElement>{}


export default function Head(props: IHead) {
    const className = [
        css.head,
        props.className
    ].join(' ')

    return <Box
        className={className}
        onClick={props.onClick}
    >
        {props.children}
    </Box>
}
