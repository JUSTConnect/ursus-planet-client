import c from 'classnames'

import FigureBase from "@/shared/ui/Figure";

import css from './index.module.scss'


export default function Figure({className, ...props}: React.ComponentProps<typeof FigureBase>) {
    const cn = c(
        className,
        css.figure
    )

    return <FigureBase {...props} className={cn}/>
}