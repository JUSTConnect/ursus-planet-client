import css from './index.module.scss'

import Button, {IButton} from '.'



export default function ButtonIcon(props: IButton) {
    const className = [
        props.className,
        css.buttonIcon
    ].join(' ')

    return <Button
        {...props}
        iconStart={props.children}
        className={className}
        children={null}
    />
}