import css from './index.module.scss'
import Container from '@/components/core/Container'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
}

export default function StickyHeader({
    children,
    className,
    style
}: Props) {

    const getClassName = () => {
        return [
            css.header,
            className
        ].join(' ')
    }

    return <header
        className={ getClassName() }
        style={ style }
    >
        { children }
    </header>
}