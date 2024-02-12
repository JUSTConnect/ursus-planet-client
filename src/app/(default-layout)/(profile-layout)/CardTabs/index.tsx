import { memo } from 'react'

import CardTabs, {ICardTabs} from '@/components/CardTabs'

import css from './index.module.scss'


function CustomCardTabs(props: ICardTabs) {
    return <CardTabs {...props} className={css.tabs}/>
}


export default memo(CustomCardTabs)

