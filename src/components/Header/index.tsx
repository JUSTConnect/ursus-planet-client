'use client'
import Image from 'next/image'
import Link from 'next/link'

import { IoDocumentText } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { MdSupport } from "react-icons/md";

import { IItem } from '@/components/core/Dropdown'
import Container from '@/components/core/Container'

import css from './index.module.scss'
import logo from './img/logo.svg'

import Menu from './Menu'
import MenuMobile from './MenuMobile'
import SectionRight from './SectionRight'


export interface IMenuItem
{
    name: string
    link?: string
    children?: IItem[]
    disabled?: boolean
}


const menu: IMenuItem[] = [
    {
        name: "Discover",
        // children: [
        //
        //         {
        //             name: 'Main',
        //             value: 'main',
        //             icon: <ImSpades />
        //         },
        //         {
        //             name: 'Free',
        //             value: 'free',
        //             icon: <TbFreeRights />
        //         },
        //         {
        //             name: 'Best',
        //             value: 'best',
        //             icon: <FaHeart />
        //         },
        //         {
        //             name: 'Upcoming',
        //             value: 'upcoming',
        //             icon: <GiNextButton />
        //         },
        //         {
        //             name: 'Your Drops',
        //             value: 'your-drops',
        //             icon: <FaDroplet />
        //         }
        // ]
    },
    {
        name: "Universe",
        disabled: true
    },
    {
        name: "Leaderboard",
        disabled: true
        // children: [
        //     {
        //         name: 'Projects',
        //         value: 'main',
        //         icon: <FaLayerGroup />
        //     },
        //     {
        //         name: 'Players',
        //         value: 'free',
        //         icon: <FaPlay />
        //     },
        // ]
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

    return <header className={css.header}>
        <Container className={css.headerContainer}>
            <div className={css.sectionLeft}>
                <Link href='/'>
                    <Image className={css.logo} src={logo} alt='logo' />
                </Link>
                <Menu items={menu}/>
            </div>
            <SectionRight/>
        </Container>
        <MenuMobile items={menu}/>
    </header>
}