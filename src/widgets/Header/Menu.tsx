import Link from 'next/link'
import { Flex } from '@radix-ui/themes'
import c from 'classnames'

import css from './index.module.scss'

import Dropdown from '@/shared/ui/Dropdown'

import { IMenuItem } from '.'


interface IMenu
{
    items: IMenuItem[]
}


export default function Menu(props: IMenu) {
    return <Flex gap='5' className={css.menu}>
        {
            props.items.map((item, index) =>
                item.children ?
                    <Dropdown.Root key={index}>
                        <Dropdown.Trigger>
                            <Flex
                                className={[css.menuItem, item.disabled && css.menuItemDisabled].join(' ')}
                                align='center'
                                gap='1'
                            >
                                {item.name}
                                <Dropdown.Arrow/>
                            </Flex>
                        </Dropdown.Trigger>
                        <Dropdown.Menu>
                            {
                                item.children.map((children, index) =>
                                    <Link key={index} href={children.link || '#'}>
                                        <Dropdown.Item>
                                            {children.name}
                                            {children.icon}
                                        </Dropdown.Item>
                                    </Link>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown.Root>
                :
                <Link
                    key={index}
                    className={c(css.menuItem, item.disabled && css.menuItemDisabled)}
                    href={ item.link || '#' }
                >
                    {item.name}
                </Link>
            )
        }
    </Flex>
}