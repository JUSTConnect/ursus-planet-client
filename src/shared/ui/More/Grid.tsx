import { Grid as GridBase } from "@radix-ui/themes";
import c from 'classnames'

import css from './index.module.scss'


export default function Grid({children, className, ...props}: React.ComponentProps<typeof GridBase>)
{
    const cn = c(
        css.grid,
        className
    )

    return <GridBase
        columns={{
            md: '2'
        }}
        gap={{
            initial: '5',
            sm: '9'
        }}
        py='5'
        {...props}
        className={cn}
    >
        {children}
    </GridBase>
}