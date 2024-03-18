'use client'
import { Box } from '@radix-ui/themes'

import {useTabs} from './Tabs'

import css from './index.module.scss'


interface IRoot extends React.HTMLAttributes<HTMLDivElement>{
    tabulated?: boolean
    value?: string
}


export default function Root(props: IRoot) {
    const tabs = useTabs()

    const className = [
        css.root,
        props.className,
        props.tabulated && tabs.active && tabs.breakpointClassName,
        props.tabulated && tabs.active && tabs.currentValue !== props.value && css.hidden,
    ].join(' ')

    return <Box
        className={className}
    >
        {props.children}
    </Box>
}
