'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import iconArrow from './img/icon-arrow.svg'
import iconMetamask from './img/icon-metamask.svg'
import iconPolygon from './img/icon-polygon.svg'


interface Item
{
    value: string
    icon: StaticImageData
}


const items: Item[] = [
    {
        value: 'metamask',
        icon: iconMetamask
    },
    {
        value: 'polygon',
        icon: iconPolygon
    }
]


export default function DropdownNetwork() {
    const [active, setActive] = useState(false)
    const [itemActive, setItemActive] = useState(items[0])

    const handleChoose = (item: Item) => {
        setActive(false)
        setItemActive(item)
    }

    return <div
        className={[css.dropdown, active && css.dropdownActive].join(' ')}
    >
        <div
            className={css.button}
            onClick={ () => setActive(!active) }
        >
            {
                itemActive &&
                <Image className={css.icon} src={itemActive.icon} alt='icon'/>
            }
            <Image className={css.arrow} src={iconArrow} alt='icon'/>
        </div>
        <div className={css.menu}>
            {
                items.filter(item => item.value !== itemActive.value).map(item=>
                    <Image
                        key={item.value}
                        className={css.icon}
                        onClick={ () => handleChoose(item) }
                        src={item.icon}
                        alt='icon'
                    />
                )
            }
        </div>
    </div>
}