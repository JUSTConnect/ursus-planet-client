import Image, { StaticImageData } from "next/image"

import { CardHead } from "@/components/core/Card"

import css from './index.module.scss'


interface ICardTabs extends React.HTMLAttributes<HTMLDivElement>
{
    tabs: ICardTab[]    
    activeTab: string
    setActiveTab: CallableFunction
}


export interface ICardTab {
    value: string
    title: string
    icon: StaticImageData
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
                    <Image
                        className={css.innerNavIcon}
                        src={tab.icon}
                        alt='icon'
                    />
                    {tab.title}
                </CardHead>
            )
        }
    </div>
}