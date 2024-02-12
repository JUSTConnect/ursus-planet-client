import { Color } from '@/components/core/Colors'
import css from './index.module.scss'


export type ButtonVariant = 'regular' | 'blank'
export type ButtonColor = Color | 'white'
export type ButtonSize = 'sm' | 'md' | 'lg'


export interface IButton extends React.HTMLAttributes<HTMLButtonElement>
{
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize
    type?: 'submit' | 'button'

    // icon
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode

    // modificators
    fullWidth?: boolean
    animated?: boolean,
    hovered?: boolean,
    disabled?: boolean
}


export default function Button(props: IButton) {
    const {
        variant = 'regular',
        color = 'primary',
        size = 'md',
    } = props

    const getClassName = () => {
        return [
            css.button,

            css[`button--${variant}`],
            css[`button--${color}`],
            css[`button--${size}`],
    
            props.fullWidth && css.fullWidth,
            props.animated && css.animated,
            props.hovered && css.hovered,
            props.className,
        ].join(' ')
    }

    return <button
        className={ getClassName() }
        style={props.style}
        onClick={ props.onClick }
        disabled={ props.disabled }
        type={ props.type }
    >
        { props.iconStart &&
            props.iconStart
        } 
        { props.children &&
            <div className={css.text}>{ props.children }</div>
        }
        { props.iconEnd &&
            props.iconEnd
        } 
    </button>
}