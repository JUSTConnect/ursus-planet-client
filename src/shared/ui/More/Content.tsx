import { Flex } from "@radix-ui/themes";
import c from 'classnames'

import css from './index.module.scss'


export default function Content({children, className, ...props}: React.ComponentProps<typeof Flex>)
{
    const cn = c(
        css.content,
        className
    )

    return <Flex
        direction='column'
        justify='center'
        gap='3'
        {...props}
        className={cn}
    >
        {children}
    </Flex>
}