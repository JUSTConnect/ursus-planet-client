'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { IoIosArrowDown } from 'react-icons/io'

import css from './index.module.scss'
import iconArrowDown from './img/arrow-down.svg'

import Container from '@/components/core/Container'
import DropdownMenu from '@/components/core/Dropdown/DropdownMenu'

import { IMenuItem } from '.'


interface IMenuMobile {
    items: IMenuItem[]
}


export default function MenuMobile(props: IMenuMobile) {
    const [activeDropdown, setActiveDropdown] = useState<string | undefined>()
    const wrapper = useRef<HTMLDivElement>(null)

    useEffect(
        () => document.addEventListener('mousedown', e => {
            !wrapper.current?.contains(e.target as Node) && activeDropdown && setActiveDropdown(undefined)
        }), [activeDropdown]
    )


    return <div ref={wrapper} className={css.menuBottomWrapper}>
        <Container className={css.menuBottom}>
            {props.items.map(item =>
                item.link ?
                    <Link
                        key={item.name + 'mobile'}
                        className={[css.menuBottomItem, item.disabled && css.menuBottomItemDisabled].join(' ')}
                        href={item.link || '#'}
                    >
                        {item.name}
                    </Link>
                :
                    <div
                        key={item.name + 'mobile'}
                        className={[css.menuBottomItem, activeDropdown === item.name && css.menuBottomItemActive, item.disabled && css.menuBottomItemDisabled].join(' ')}
                        onClick={() => setActiveDropdown(item.name!==activeDropdown?item.name:undefined)}
                    >
                        {item.name}
                        {item.children &&
                            <IoIosArrowDown
                                className={css.menuBottomItemArrow}/>
                        }
                    </div>
            )}
        </Container>
        <div className={css.menuBottomDropdownWrapper}>
            {
                props.items.map(item =>
                    item.children &&
                    <DropdownMenu
                        key={item.name}
                        className={css.menuBottomDropdown}
                        setActive={ () => setActiveDropdown(undefined) }
                        active={item.name === activeDropdown}
                        items={item.children}
                        testDisableHiding
                    />
                )
            }
        </div>
    </div>
}
