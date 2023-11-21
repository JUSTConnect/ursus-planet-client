import { Color } from '@/components/core/Colors'
import css from './index.module.scss'


export type ButtonVariant = 'regular' | 'blank'
export type ButtonColor = Color
export type ButtonSize = 'sm' | 'md' | 'lg'


interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize

    // icon
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode

    // modificators
    fullWidth?: boolean
    animated?: boolean,
    disabled?: boolean
}


export default function Button(props: Props) {
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
            props.className,
        ].join(' ')
    }

    return <button
        className={ getClassName() }
        style={props.style}
        onClick={ props.onClick }
        disabled={ props.disabled }
    >
        { props.iconStart &&
            <div className={ css.icon }>
                { props.iconStart }
            </div>
        } 
        <div className={css.text}>{ props.children }</div>
        { props.iconEnd &&
            <div className={ css.icon }>
                { props.iconEnd }
            </div>
        } 
    </button>
}