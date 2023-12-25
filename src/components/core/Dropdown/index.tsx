'use client'

import { useState } from 'react'

import css from './index.module.scss'

import DropdownMenu from './DropdownMenu'


export interface IItem
{
    name: string
    value?: string
    icon?: React.ReactNode
}


interface IDropdown extends React.HTMLAttributes<HTMLDivElement>
{
    items: IItem[]
    hover?: boolean
    classNameMenu?: string
    disabled?: boolean
}


export default function Dropdown(props: IDropdown) {
    const [active, setActive] = useState(false)

    const className = [
        css.dropdown,
        active && css.dropdownActive,
        props.hover && css.dropdownHover,
        props.className
    ].join(' ')

    return <div className={className} onClick={ () => !props.hover && !props.disabled && setActive(!active) }>
        { props.children }
        { !props.disabled &&
            <DropdownMenu className={props.classNameMenu} items={props.items} active={active}/>
        }
    </div> 
}