import css from './index.module.scss'
import {
    Container as RadixContainer
} from '@radix-ui/themes'


export default function Container({
    children,
    className,
    ...props
}: React.ComponentProps<typeof RadixContainer>) {

    const getClassName = () => {
        return [
            css.container,
            className
        ].join(' ')
    }

    return <RadixContainer
        px='3'
        size='4'
        className={ getClassName() }
        {...props}
    >
        { children }
    </RadixContainer>
}