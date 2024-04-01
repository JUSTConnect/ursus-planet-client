import React from "react"
import { Button as RadixButton } from "@radix-ui/themes"
import c from "classnames"

import css from './index.module.scss'
import { ForwardedRef } from "react"


export type ButtonSize = 'sm'|'md'|'lg'
export type ButtonVariant = 'solid'|'ghost'
export type ButtonColor = 'dark'|'gray'|'primary'|'white'
export type ButtonRadius = 'full'|'normal'


interface IButton extends Omit<React.ComponentProps<typeof RadixButton>, 'size'|'color'|'radius'>
{
    size?: ButtonSize
    variant?: ButtonVariant
    radius?: ButtonRadius
    color?: ButtonColor
    hoverToWhite?: boolean
    fullWidth?: boolean
    wideWidth?: boolean
    icon?: boolean
}


const Button = React.forwardRef((
    {
        className,
        hoverToWhite,
        fullWidth,
        wideWidth,
        icon,
        size='md',
        variant='solid',
        radius='full',
        color='gray',
        type='button',
        ...props
    }: IButton,
    forwardRef: ForwardedRef<HTMLButtonElement>
) => {
    const cn = c(
        className,
        css.button,
        css[size],
        css[variant],
        css[radius],
        css[color],
        hoverToWhite && css.hoverToWhite,
        fullWidth && css.fullWidth,
        wideWidth && css.wideWidth,
        icon && css.icon
    )

    return <RadixButton
        {...props}
        className={cn}
        ref={forwardRef}
        type={type}
    >
        {props.children}
    </RadixButton>
})

export default Button