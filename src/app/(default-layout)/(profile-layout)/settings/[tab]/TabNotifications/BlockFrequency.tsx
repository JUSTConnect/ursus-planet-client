'use client'
import { useState } from 'react'
import Image from 'next/image'

import Dropdown from '@/components/core/Dropdown'

import css from './index.module.scss'
import iconArrowDown from './icons/icon-arrow-down.svg'


interface IBlockFrequency
{
    name?: string
    defaultValue?: string
}


const items = [
    {
        name: 'As fast as possible',
        value: 'fast'
    },
    {
        name: 'Every hour',
        value: 'hour'
    },
    {
        name: 'Every day',
        value: 'day'
    },
    {
        name: 'Every week',
        value: 'week'
    },
    {
        name: 'Every Month',
        value: 'month'
    }
]


export default function BlockFrequency(props: IBlockFrequency) {
    const [value, setValue] = useState(props.defaultValue)

    return <Dropdown
        id={props.name}
        defaultValue={value}
        onChoose={ value => setValue(value) }
        items={items}
    >
        <div className={[css.blockSubscription, css.blockEveryDay].join(' ')}>
            {items.filter(item => item.value===value)[0]?.name}
            <Image src={iconArrowDown} alt='icon' />
        </div>
        <input type="text" value={value} readOnly name={props.name} hidden/>
    </Dropdown>
}