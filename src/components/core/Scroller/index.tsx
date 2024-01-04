import css from './index.module.scss'


export default function Scroller({
    className,
    style,
    children
}: React.HTMLAttributes<HTMLDivElement>) {

    const getClassName = () => {
        return [
            css.scroller,
            className
        ].join(' ')
    }

    return <div className={ getClassName() }>
        { children }
    </div>
}