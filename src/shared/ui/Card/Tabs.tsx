'use client'
import { createContext, useContext, useState } from 'react'
import c from 'classnames'

import { Box, Flex } from "@radix-ui/themes"

import css from './index.module.scss'


export interface ITabs extends React.HTMLAttributes<HTMLDivElement>{
    tabulated?: boolean
}


export function Tabs(props: ITabs) {

    const tabs = useTabs()

    const className = [
        css.tabs,
        props.tabulated && tabs.active && tabs.breakpointClassName,
        props.className
    ].join(' ')

    return <Box className={className}>
        <Flex>
            {props.children}
        </Flex>
    </Box>
}


interface ITab extends React.HTMLAttributes<HTMLDivElement>
{
    value: string
}


export function Tab(props: ITab) {
    const tabs = useTabs()

    return <Box
        onClick={ () => tabs.setCurrentValue?.(props.value) }
        className={c(
            css.tab,
            props.className,
            tabs.currentValue === props.value && css.tabActive 
        )}
    >
        {props.children}
    </Box>
}


interface ITabsContext
{
    active: boolean
    size: 'sm'|'md'|'lg'
    currentValue: string
    setCurrentValue: (_: string) => void
    breakpointClassName: string
}


const TabsContext = createContext<ITabsContext>({
    active: false,
    size: 'sm',
    currentValue: '',
    setCurrentValue: () => {},
    breakpointClassName: ''
})


interface ITabsProvider
{
    defaultValue: string
    size: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}


export function TabsProvider(props: ITabsProvider) {
    const [activeTab, setActiveTab] = useState(props.defaultValue)

    return <TabsContext.Provider
        value={{
            active: true,
            size: props.size,
            currentValue: activeTab,
            setCurrentValue: setActiveTab,
            breakpointClassName: `${props.size}TabsBreakpoint`
        }}
    >
        {props.children}
    </TabsContext.Provider>
}


export function useTabs() {
    return useContext(TabsContext)
}