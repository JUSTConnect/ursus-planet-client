import css from './index.module.scss'
import { Color } from '../Colors'


export type TypographyVariant =
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'p' | 'span' | 'div'
export type TypographyColor = Color | 'black' | 'white'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    variant?: TypographyVariant,
    color?: TypographyColor,
    center?: boolean
}


export default function Typography({
    variant = 'span',
    color,
    children,
    className,
    style,
    center
}: Props) {
    const getClassName = () => {
        return [
            css.typography,
            css[variant],
            color && css[color],
            center && css.center,
            className,
        ].join(' ')
    }

    return <div
        className={ getClassName() }
        style={ style }
    >
        { children }
    </div>
}