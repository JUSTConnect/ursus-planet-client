'use client'

import { useState, useRef, useEffect } from 'react'

import css from './index.module.scss'

import DropdownMenu from './DropdownMenu'


export interface IItem {
    name: string
    value?: string
    icon?: React.ReactNode
    link?: string
    onClick?: React.MouseEventHandler
}


interface IDropdown extends React.HTMLAttributes<HTMLDivElement> {
    items: IItem[]
    hover?: boolean
    classNameMenu?: string
    disabled?: boolean
    onChoose?: (value?: string) => void
}


export default function Dropdown(props: IDropdown) {
    const [active, setActive] = useState(false)
    const self = useRef<HTMLDivElement>(null)

    useEffect(
        () => document.addEventListener('mousedown', e => {
            self.current &&
                !self.current.contains(e.target as Node) &&
                setActive(false)
        }), []
    )

    const className = [
        css.dropdown,
        active && css.dropdownActive,
        props.hover && css.dropdownHover,
        props.className
    ].join(' ')

    const handleClick = () => {
        setActive(!active)
    }

    return <div
        className={className}
        onClick={handleClick}
        ref={self}
    >
        {props.children}
        {!props.disabled &&
            <DropdownMenu
                id={'dropdown-menu'+props.id}
                onChoose={props.onChoose}
                className={props.classNameMenu}
                items={props.items}
                active={active}
                setActive={setActive}
            />
        }
    </div>
}