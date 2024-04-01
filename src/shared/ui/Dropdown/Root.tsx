'use client'
import c from 'classnames'

import {DropdownProvider} from './context'
import Container from "./Container"

import css from './index.module.scss'


interface IDropdown extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean
    disabled?: boolean
    active?: boolean
}


export default function Dropdown(props: IDropdown) {

    const className = c(
        css.root,
        props.className,
        props.hover && css.hover,
    )

    return <DropdownProvider active={props.active} disabled={props.disabled}>
        <Container className={className}>
            {props.children}
        </Container>
    </DropdownProvider>
}