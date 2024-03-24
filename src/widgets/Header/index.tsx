'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Flex } from '@radix-ui/themes';
import c from 'classnames';
import { IoDocumentText } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { MdSupport } from "react-icons/md";

import Container from "@/shared/ui/Container"

import css from './index.module.scss'
import logo from './img/logo.svg'

import Menu from './Menu'
import MenuMobile from './MenuMobile'
import SectionRight from './SectionRight'


export interface IMenuItem
{
    name: string
    link?: string
    children?: {
        name: string
        link?: string
        icon?: React.ReactNode
    }[]
    disabled?: boolean
}


const menu: IMenuItem[] = [
    {
        name: "Discover",
        link: '/'
    },
    {
        name: "Universe",
        disabled: true
    },
    {
        name: "Leaderboard",
        disabled: true
    },
    {
        name: "More",
        children: [
            {
                name: 'Docs',
                icon: <IoDocumentText />
            },
            {
                name: 'Careers',
                icon: <FaStar />
            },
            {
                name: 'Brand kit',
                icon: <IoExtensionPuzzle />
            },
            {
                name: 'Media',
                icon: <FiShare2 />
            },
            {
                name: 'Support',
                icon: <MdSupport />
            },
        ]
    }
]


export default function Header() {
    
    const [active, setActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 100) {
                setActive(true)
              } else {
                setActive(false)
              }
        })
    }, [])

    return <header className={c(css.header, active && css.headerActive)}>
        <Container>
            <Flex
                className={css.headerInner}
                justify='between'
                align='center'
                gap='5'
            >
                <Flex align='center' gap='9'>
                    <Link href='/'>
                        <Image className={css.logo} src={logo} alt='logo' />
                    </Link>
                    <Menu items={menu}/>
                </Flex>
                <SectionRight/>
            </Flex>
        </Container>
        <MenuMobile items={menu}/>
    </header>
}