import ContainerBase from "@/shared/ui/Container";
import c from 'classnames'

import css from './index.module.scss'


export default function Container({children, className, ...props}: React.ComponentProps<typeof ContainerBase>)
{
    const cn = c(
        css.container,
        className
    )

    return <ContainerBase
        {...props}
        className={cn}
        mb='9'
        pb='9'
    >
        {children}
    </ContainerBase>
}