import React from "react"
import { Button as RadixButton } from "@radix-ui/themes"

import css from './index.module.scss'
import { ForwardedRef } from "react"


export type ButtonSize = 'sm'|'md'|'lg'
export type ButtonVariant = 'solid'|'ghost'
export type ButtonColor = 'dark'|'gray'|'primary'|'white'
export type ButtonRadius = 'full'|'normal'


interface IButton extends React.HTMLAttributes<HTMLButtonElement>
{
    size?: ButtonSize
    variant?: ButtonVariant
    radius?: ButtonRadius
    color?: ButtonColor
    type?: 'submit' | 'button'
    hoverToWhite?: boolean
    fullWidth?: boolean
    wideWidth?: boolean
    asChild?: boolean
    icon?: boolean
    disabled?: boolean
}


const Button = React.forwardRef((
    {
        size='md',
        variant='solid',
        radius='full',
        color='gray',
        type='button',
        ...props
    }: IButton,
    forwardRef: ForwardedRef<HTMLButtonElement>
) => {
    const className = [
        css.button,
        props.className,
        props.hoverToWhite && css.hoverToWhite,
        props.fullWidth && css.fullWidth,
        props.wideWidth && css.wideWidth,
        props.icon && css.icon,
        css[size],
        css[variant],
        css[radius],
        css[color]
    ].join(' ')

    return <RadixButton
        asChild={props.asChild}
        className={className}
        style={props.style}
        ref={forwardRef}
        type={type}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </RadixButton>
})

export default Button