import css from './index.module.scss'


export default function Container({
    children,
    className,
    style
}: React.HTMLAttributes<HTMLDivElement>) {

    const getClassName = () => {
        return [
            css.container,
            className
        ].join(' ')
    }

    return <div
        className={ getClassName() }
        style={ style }
    >
        { children }
    </div>
}