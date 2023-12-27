'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        }), []
    )


    return <div ref={wrapper} className={css.menuBottomWrapper}>
        <Container className={css.menuBottom}>
            {props.items.map(item =>
                <Link
                    key={item.name + 'mobile'}
                    className={css.menuBottomItem} href={item.link || '#'}
                    onClick={() => setActiveDropdown(item.name!==activeDropdown?item.name:undefined)}
                >
                    {item.name}
                    {item.children &&
                        <Image
                            className={css.menuBottomItemArrow}
                            src={iconArrowDown}
                            alt='arrow'
                        />
                    }
                </Link>
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
