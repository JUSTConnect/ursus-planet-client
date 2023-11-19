import css from './index.module.scss'


export type ButtonVariant = 'primary' | 'regular' | 'white' | 'base'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    variant?: ButtonVariant
    iconStart?: React.ReactNode
    fullWidth?: boolean
    size?: ButtonSize
}

export default function Button(props: Props) {

    const getClassName = () => {
        return [
            css.button,
            props.className,
            props.variant ? css[`button--${props.variant}`] : css['button--regular'],
            props.size ? css[`button--${props.size}`] : css['button--md'],
            props.fullWidth && css.fullWidth
        ].join(' ')
    }

    return <button
        className={ getClassName() }
        onClick={ props.onClick }
    >
        {
            props.iconStart &&
                <div className={ css.buttonIcon }>
                    { props.iconStart }
                </div>
        }
        { props.children }
    </button>
}