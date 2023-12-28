'use client'

import { useState } from 'react'
import Image from 'next/image'

import css from './index.module.scss'

import iconChain from '../img/icon-chain.png'

import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'
import Switch from '@/components/core/Switch'

import IconCopy from './img/IconCopy'
import IconDelete from './img/IconDelete'


interface IChainItem
{
    active?: boolean
}


export default function ChainItem(props: IChainItem) {
    const [active, setActive] = useState(!!props.active)

    return <div className={[css.item, active && css.itemActive].join(' ')}>
        <div className={css.top}>
            <Typography variant='p' className={css.title}>
                User name
            </Typography>
            <div className={css.topRight}>
                <Typography>EVM chain</Typography>
                <div className={css.badge}>
                    { active ? 'Active' : 'Inactive' }
                </div>
                <Switch defaultChecked={!!props.active} onSwitch={ e => {setActive(e)} }/>
            </div>
        </div>
        <div className={css.bottom}>
            <div>
                <Stack className={css.icons}>
                    {
                        [...Array(4)].map((_, index) =>
                            <div key={index} className={css.icon}>
                                <Image src={iconChain} alt='icon'/>
                            </div>
                        )
                    }
                </Stack>
            </div>
            <div className={css.bottomRight}>
                <div className={css.hash}>
                    56uy56u5...yhbg34gf4g
                </div>
                <div className={css.bottomButton}>
                    <IconCopy/>
                </div>
                <div className={css.bottomButton}>
                    <IconDelete/>
                </div>
            </div>
        </div>        
    </div>
}