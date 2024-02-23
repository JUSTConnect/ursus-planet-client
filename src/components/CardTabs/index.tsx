import { CardHead } from "@/components/core/Card"

import css from './index.module.scss'


export interface ICardTabs extends React.HTMLAttributes<HTMLDivElement>
{
    tabs: ICardTab[]    
    activeTab: string
    setActiveTab: CallableFunction
}


export interface ICardTab {
    value: string
    title: string
    icon: React.ReactNode
}


export default function CardTabs(props: ICardTabs) {

    const computedClassName = [
        css.cardTabs,
        props.className
    ].join(' ')

    return <div className={computedClassName}>
        {
            props.tabs.map(tab =>
                <CardHead
                    key={tab.value}
                    className={[css.cardTab, props.activeTab === tab.value && css.cardTabActive].join(' ')}
                    onClick={() => props.setActiveTab(tab.value)}
                >
                    {tab.icon}
                    {tab.title}
                </CardHead>
            )
        }
    </div>
}