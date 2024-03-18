import css from './index.module.scss'


interface Props extends React.HTMLAttributes<HTMLDivElement> {}


export default function Blur(props: Props) {

    const getClassName = () => {
        return [
            css.blur,
            props.className
        ].join(' ')
    }

    return <div
        className={ getClassName() }
        onClick={ props.onClick }
        style={ props.style }
    ></div>
}