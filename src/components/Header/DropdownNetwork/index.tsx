'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import iconArrow from './img/icon-arrow.svg'
import iconPolygon from './img/icon-polygon.svg'
import iconInvalid from './img/invalid.svg'
import iconArb from './img/icon-arb.svg'
import iconBnb from './img/icon-bnb.svg'

import chains from './chains'


interface IDropdownNetwork {
    chain: string
}


interface Item {
    value: string
    icon: StaticImageData
    chain_id: string
}


const items: Item[] = [
    {
        value: 'polygon',
        icon: iconPolygon,
        chain_id: '0x1'
    },
    {
        value: 'bnb',
        icon: iconBnb,
        chain_id: '0x38'
    },
    {
        value: 'arb',
        icon: iconArb,
        chain_id: '0xa4b1'
    }
]


export default function DropdownNetwork(props: IDropdownNetwork) {
    const [active, setActive] = useState(false)

    const handleChoose = (chain_id: string) => {
        setActive(false)
        window.ethereum.request({
            "method": "wallet_switchEthereumChain",
            "params": [
                {
                    "chainId": chain_id
                }
            ]
        }).catch((err: { code: Number }) => {
            console.log(err?.code)
            err?.code === 4902 && window.ethereum.request({
                "method": "wallet_addEthereumChain",
                "params": [chains[chain_id]]
            }).then(() => {
                window.ethereum.request({
                    "method": "wallet_switchEthereumChain",
                    "params": [
                        {
                            "chainId": chain_id
                        }
                    ]
                })
            })

        })
    }


    return <div
        className={[css.dropdown, active && css.dropdownActive].join(' ')}
    >
        <div
            className={css.button}
            onClick={() => setActive(!active)}
        >
            {
                !['0x1', '0x38', '0xa4b1'].includes(props.chain) ?
                    <Image
                        className={css.icon}
                        src={iconInvalid}
                        alt='invalid'
                    />
                    :
                    <Image className={css.icon} src={items.filter(item => item.chain_id === props.chain)[0].icon || ''} alt='icon' />
            }
            <Image className={css.arrow} src={iconArrow} alt='icon' />
        </div>
        <div className={css.menu}>
            {
                items.filter(item => item.chain_id !== props.chain).map(item =>
                    <Image
                        key={item.value}
                        className={css.icon}
                        onClick={() => handleChoose(item.chain_id)}
                        src={item.icon}
                        alt='icon'
                    />
                )
            }
        </div>
    </div>
}