'use client'

import { useState } from 'react'

import css from './index.module.scss'

import DropdownMenu from './DropdownMenu'


interface IItem
{
    name: string
    value: string
}


interface IDropdown extends React.HTMLAttributes<HTMLDivElement>
{
    items: IItem[]
}


export default function Dropdown(props: IDropdown) {
    const [active, setActive] = useState(false)

    const className = [
        css.dropdown,
        props.className
    ].join(' ')

    return <div className={className} onClick={ () => setActive(true) }>
        { props.children }
        <DropdownMenu items={props.items} active={active}/>
    </div> 
}