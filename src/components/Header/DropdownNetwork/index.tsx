'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import iconArrow from './img/icon-arrow.svg'
import iconPolygon from './img/icon-polygon.svg'
import iconInvalid from './img/invalid.svg'
import iconArb from './img/icon-arb.svg'
import iconBnb from './img/icon-bnb.svg'


interface IDropdownNetwork {
    chain: string
}


interface Item
{
    value: string
    icon: StaticImageData
}


const items: Item[] = [
    {
        value: 'polygon',
        icon: iconPolygon
    },
    {
        value: 'bnb',
        icon: iconBnb
    },
    {
        value: 'arb',
        icon: iconArb
    }
]


export default function DropdownNetwork(props: IDropdownNetwork) {
    const [active, setActive] = useState(false)
    const [itemActive, setItemActive] = useState(items[0])

    const handleChoose = (item: Item) => {
        setActive(false)
        setItemActive(item)
    }

    if (!['0x1', '0x38', '0xa4b1'].includes(props.chain))
    {
        return <>
            <Image
                className={css.icon}
                src={iconInvalid}
                alt='invalid'
            />
        </> 
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