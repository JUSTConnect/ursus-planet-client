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
                        key={item.name}
                        items={item.children}
                        hover
                    >
                        <Link
                            className={css.menuItem}
                            href={ item.link || '#' }
                        >
                            {item.name}
                            <div className={css.menuItemArrow}>
                                <IconArrowDown />
                            </div>
                        </Link>
                    </Dropdown>
                :
                <Link
                    key={item.name}
                    className={css.menuItem}
                    href={ item.link || '#' }
                >
                    {item.name}
                </Link>
            )
        }
    </nav>
}