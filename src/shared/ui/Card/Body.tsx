import { Box } from '@radix-ui/themes'

import css from './index.module.scss'


interface IBody extends React.HTMLAttributes<HTMLDivElement>{}


export default function Body(props: IBody) {
    const className = [
        css.body,
        props.className
    ].join(' ')

    return <Box
        className={className}
    >
        {props.children}
    </Box>
}
