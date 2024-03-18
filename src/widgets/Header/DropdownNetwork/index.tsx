'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box } from '@radix-ui/themes'
import c from 'classnames'

import Button from '@/shared/ui/Button'

import css from './index.module.scss'
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
        chain_id: '0x89'
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
    const self = useRef<HTMLDivElement>(null)

    useEffect(
        () => document.addEventListener('mousedown', e => {
            self.current &&
                !self.current.contains(e.target as Node) &&
                setActive(false)
        }), []
    )

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


    return <Box
        className={[css.dropdown, active && css.dropdownActive].join(' ')}
        ref={self}
    >
        <Button icon
            className={c(css.button, active && css.buttonActive)}
            onClick={() => setActive(!active)}
            color='gray'
        >
            {
                !['0x89', '0x38', '0xa4b1'].includes(props.chain) ?
                    <Image
                        src={iconInvalid}
                        alt='invalid'
                    />
                    :
                    <Image src={items.filter(item => item.chain_id === props.chain)[0].icon || ''} alt='icon' />
            }
        </Button>
        <Box className={css.menu}>
            {
                items.filter(item => item.chain_id !== props.chain).map(item =>
                    <Button
                        key={item.value}
                        onClick={() => handleChoose(item.chain_id)}
                        className={css.button}
                        hoverToWhite
                        color='gray'
                    >
                        <Image
                            src={item.icon}
                            alt='icon'
                        />
                    </Button>
                )
            }
        </Box>
    </Box>
}