'use client'
import { Box } from '@radix-ui/themes'

import {useTabs} from './Tabs'

import css from './index.module.scss'


interface IRoot extends React.HTMLAttributes<HTMLDivElement>{
    tabulated?: boolean
    value?: string
}


export default function Root({
    children,
    tabulated,
    value,
    className,
    ...props
}: IRoot) {
    const tabs = useTabs()

    const cn = [
        css.root,
        className,
        tabulated && tabs.active && tabs.breakpointClassName,
        tabulated && tabs.active && tabs.currentValue !== value && css.hidden,
    ].join(' ')

    return <Box
        {...props}
        className={cn}
    >
        {children}
    </Box>
}
