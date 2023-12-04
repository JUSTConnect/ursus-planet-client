import css from './index.module.scss'

export default function Dropdown(props: React.HTMLAttributes<HTMLDivElement>) {
    const className = [
        css.dropdown,
        props.className
    ].join(' ')

    return <div className={className}>
        { props.children }
    </div> 
}