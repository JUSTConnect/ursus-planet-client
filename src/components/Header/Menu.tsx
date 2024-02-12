import Link from 'next/link'

import css from './index.module.scss'
import IconArrowDown from './img/IconArrowDown'

import Dropdown from '@/components/core/Dropdown'

import { IMenuItem } from '.'


interface IMenu
{
    items: IMenuItem[]
}


export default function Menu(props: IMenu) {
    return <nav className={css.menu}>
        {
            props.items.map(item =>
                item.children ?
                    <Dropdown
                        className={css.menuItemWrapper}
                        key={item.name}
                        items={item.children}
                        hover
                    >
                        <div
                            className={[css.menuItem, item.disabled && css.menuItemDisabled].join(' ')}
                        >
                            {item.name}
                            <div className={css.menuItemArrow}>
                                <IconArrowDown />
                            </div>
                        </div>
                    </Dropdown>
                :
                <Link
                    key={item.name}
                    className={[css.menuItem, item.disabled && css.menuItemDisabled].join(' ')}
                    href={ item.link || '#' }
                >
                    {item.name}
                </Link>
            )
        }
    </nav>
}