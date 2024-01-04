import css from './index.module.scss'
import Blur from '@/components/core/Blur'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    blured?: boolean,
    maxWidth?: number,
    active?: boolean,
    setActive?: CallableFunction
}

export default function Drawer({
    blured = true,
    maxWidth = 250,
    active,
    setActive,
    children,
    className,
    style
}: Props) {

    const getClassName = () => {
        return [
            css.drawer,
            className
        ].join(' ')
    }

    if (active) return <div className={ css.container }>
        { blured && <Blur onClick={ () => setActive && setActive(false) }/> }
        <div
            className={ getClassName() }
            style={{ ...style, maxWidth: `${maxWidth}px` }}
        >
            { children }
        </div>
    </div>

    return ''
}