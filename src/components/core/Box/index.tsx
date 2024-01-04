import css from './index.module.scss'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    mt?: number,
    mb?: number
}


export default function Box(props: Props) {

    const getClassName = () => {
        return [
            css.box,
            props.className
        ].join(' ')
    }

    return <div
        className={ getClassName() }
        style={{ ...props.style, marginTop: `${props.mt}rem`, marginBottom: `${props.mb}rem` }}
    >
        { props.children }
    </div>
}