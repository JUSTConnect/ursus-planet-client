import { RefObject, useRef } from 'react'

import css from './index.module.scss'
import {IItem} from '.'


interface IDropdownMenu extends React.HTMLAttributes<HTMLButtonElement>
{
    items: IItem[]
    active: boolean,
    setActive: CallableFunction
    onChoose?: (value?: string) => void
    testDisableHiding?: boolean
}


export default function DropdownMenu(props: IDropdownMenu) {

    return <div className={[css.menu, props.active && css.menuActive, props.className].join(' ')}>
        <div className={css.menuCard}>
            {
                props.items?.map(item =>
                    <div
                        key={css.item + item.name}
                        className={css.item}
                        onClick={ () => {props.onChoose && props.onChoose(item.value)} }
                    >
                        <div className={css.itemIcon}>
                            {item.icon}
                        </div>
                        {item.name}
                    </div>
                )
            }
        </div>
    </div>
}