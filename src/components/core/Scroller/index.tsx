import css from './index.module.scss'


export default function Scroller({
    className,
    children,
    style
}: React.HTMLAttributes<HTMLDivElement>) {

    const getClassName = () => {
        return [
            css.scroller,
            className
        ].join(' ')
    }

    return <div style={style} className={ getClassName() }>
        { children }
    </div>
}