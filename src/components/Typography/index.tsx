import css from './index.module.scss'


type TypographyVariant =
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface Props extends React.HTMLAttributes<HTMLSpanElement>
{
    variant: TypographyVariant
    center?: boolean
}


export default function Typography(props: Props)
{
    const getClassName = () => {
        return [
            css[props.variant],
            props.center && css.center
        ].join(' ')
    }

    return <props.variant
        className={ getClassName() }
    >
        { props.children }
    </props.variant>
}