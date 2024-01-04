import css from './index.module.scss'


export default function Code({
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

    return <div className={ getClassName() }>
        <pre
            className={ css.pre }
            style={ style }
        >
            { children }
        </pre>
    </div>
}