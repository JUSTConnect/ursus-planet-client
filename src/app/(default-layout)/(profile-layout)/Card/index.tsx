import { memo } from "react";

import Card from "@/components/core/Card";

import css from './index.module.scss'


interface ICustomCard extends React.HTMLAttributes<HTMLDivElement>
{
    active: boolean
}


function CustomCard(props: ICustomCard) {
    const computedClassName = [
        css.card,
        props.active && css.cardActive        
    ].join(' ')

    return <Card className={computedClassName}>
        {props.children}
    </Card>
}


export default memo(CustomCard)