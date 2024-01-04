
import Input from "./Input"
import TextArea from "./TextArea"

export type InputSize = 'sm' | 'md' | 'lg'
export type InputVariant = 'contained' | 'outlined'

export interface InputProps
{
    size?: InputSize
    variant?: InputVariant
    value?: string
    label?: string
    error?: string
    required?: boolean
    disabled?: boolean
    fullWidth?: boolean
}

export {
    Input,
    TextArea
}