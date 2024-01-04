import css from './index.module.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{

}


export default function ButtonBase(props: Props) {
    const className = [
        css.button,
        props.className
    ].join(' ')

    return <button
        className={className}
    >
        {props.children}
    </button>
}