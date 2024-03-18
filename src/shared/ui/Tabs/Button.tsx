'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import c from "classnames"

import BaseButton from "@/shared/ui/Button"

import css from './index.module.scss'


interface IButton
{
    children: React.ReactNode
    href: string
}


export default function Button(props: IButton) {
    const pathname = usePathname()

    return <Link href={props.href}>
        <BaseButton className={c(css.button, pathname.includes(props.href) && css.buttonActive)}>
            {props.children}
        </BaseButton> 
    </Link> 
}