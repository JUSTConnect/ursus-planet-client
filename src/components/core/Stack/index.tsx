import css from './index.module.scss'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    gap?: number
    direction?: 'horizontal' | 'vertical',
    fullWidth?: boolean,
    maxContent?: boolean
    wrap?: boolean,
    alignCenter?: boolean
    justifyCenter?: boolean
}

export default function Stack({
    gap = 1,
    direction = 'horizontal',
    children,
    className,
    style,
    wrap,
    fullWidth,
    maxContent,
    alignCenter,
    justifyCenter
}: Props) {

    const getClassName = () => {
        return [
            css.stack,
            className,
            css[`stack--${direction}`],
            css[`stack--${wrap && 'wrap'}`],
            css[`stack--${fullWidth && 'full-width'}`],
            css[`stack--${maxContent && 'max-content'}`],
            alignCenter && css.alignCenter,
            justifyCenter && css.justifyCenter
        ].join(' ')
    }

    return <div
        className={
            getClassName()
        }
        style={{ gap: `${gap}rem`, ...style}}
    >
        { children }
    </div>
}