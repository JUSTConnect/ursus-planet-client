import css from './index.module.scss'
import {
    Container as RadixContainer
} from '@radix-ui/themes'


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

    return <RadixContainer
        className={ getClassName() }
        style={ style }
        size='4'
        px='3'
    >
        { children }
    </RadixContainer>
}