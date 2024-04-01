import { useEffect, useRef } from "react"
import { Box } from "@radix-ui/themes"
import c from "classnames"

import {useDropdown} from './context'

import css from './index.module.scss'


interface IContainer extends React.HTMLAttributes<HTMLDivElement> {}


export default function Container({
    children,
    ...props
}: IContainer) {

    const {setActive} = useDropdown()
    const self = useRef<HTMLDivElement>(null)

    useEffect(
        () => document.addEventListener('mousedown', e => {
            self.current &&
            !self.current.contains(e.target as Node) &&
                setActive(false)
        }), [setActive]
    )

    return <Box
        {...props}
        className={c(props.className, css.root)}
        ref={self}
    >
        {children}
    </Box> 
}