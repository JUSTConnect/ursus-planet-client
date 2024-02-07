import { memo } from "react";

import { CardHead } from "@/components/core/Card";

import css from './index.module.scss'


export interface ICustomCardHead
{
    title: string
    icon: React.ReactNode
}


function CustomCardHead(props: ICustomCardHead) {
    return <CardHead className={css.cardHead}>
        {props.icon}
        {props.title}
    </CardHead>
}


export default memo(CustomCardHead)