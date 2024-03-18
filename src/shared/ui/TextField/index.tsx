import React from "react"
import { TextField as RadixTextField } from "@radix-ui/themes"

import css from './index.module.scss'
import { ForwardedRef } from "react"


export type TextFieldSize = 'sm'|'md'|'lg'
export type TextFieldRadius = 'full'|'normal'


interface IButton extends React.HTMLAttributes<HTMLInputElement>
{
    size?: TextFieldSize
    radius?: TextFieldRadius
    fullWidth?: boolean

    placeholder?: string
    readOnly?: boolean
    value?: any
    name?: string
    type?: 'email'|'password'|'text'
    disabled?: boolean
    required?: boolean
}


const Input = React.forwardRef((
    {
        size='md',
        radius='full',
        fullWidth=false,
        ...props
    }: IButton,
    forwardRef: ForwardedRef<HTMLInputElement>
) => {
    const className = [
        css.input,
        props.className,
        fullWidth && css.fullWidth,
        css[size],
        css[radius],
    ].join(' ')

    return <RadixTextField.Input
        className={className}
        style={props.style}
        ref={forwardRef}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        value={props.value}
        defaultValue={props.defaultValue}
        onInput={props.onInput}
        onClick={props.onClick}
        name={props.name}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
    >
        {props.children}
    </RadixTextField.Input>
})


const TextField = {
    Input: Input,
    Root: RadixTextField.Root,
    Slot: RadixTextField.Slot    
}

export default TextField