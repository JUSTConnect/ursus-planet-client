import css from './index.module.scss'


export type CardVariant = 'contained' | 'outlined'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    variant?: CardVariant
    shadow?: boolean
}


export default function Card({
    variant = 'contained',
    shadow = true,
    children,
    className,
    style
}: Props) {

    const getClassName = () => {
        return [
            css.card,
            css[`card--${variant}`],
            className,
            shadow && css.shadow
        ].join(' ')
    }

    return <div
        className={ getClassName() }
        style={ style }
    >
        { children }
    </div>
}


interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement>
{
    transparent?: boolean
}

export function CardBody(props: CardBodyProps) {
    const getClassName = () => {
        return [
            css.cardBody,
            props.className,
            props.transparent && css.transparent
        ].join(' ')
    }

    return <div className={ getClassName() }>
        { props.children }
    </div> 
}


interface CardHeadProps extends React.HTMLAttributes<HTMLDivElement>
{
    transparent?: boolean
}

export function CardHead(props: CardHeadProps) {
    const getClassName = () => {
        return [
            css.cardHead,
            props.className,
            props.transparent && css.transparent
        ].join(' ')
    }

    return <div className={ getClassName() }>
        { props.children }
    </div>
}


interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement>
{
    transparent?: boolean
}

export function CardFooter(props: CardBodyProps) {
    const getClassName = () => {
        return [
            css.cardFooter,
            props.className,
            props.transparent && css.transparent
        ].join(' ')
    }

    return <div className={ getClassName() }>
        { props.children }
    </div> 
}