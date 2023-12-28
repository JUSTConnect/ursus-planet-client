'use client'

import Image from 'next/image'
import Link from 'next/link'

import css from './index.module.scss'
import logo from './img/logo.svg'

import { IItem } from '@/components/core/Dropdown'
import Container from '@/components/core/Container'

import IconBest from './img/IconBest'
import IconBrandKit from './img/IconBrandKit'
import IconCareers from './img/IconCareers'
import IconDocs from './img/IconDocs'
import IconFree from './img/IconFree'
import IconMain from './img/IconMain'
import IconMedia from './img/IconMedia'
import IconPlayers from './img/IconPlayers'
import IconProjects from './img/IconProjects'
import IconSupport from './img/IconSupport'
import IconUpcoming from './img/IconUpcoming'
import IconYourDrops from './img/IconYourDrops'


import Menu from './Menu'
import MenuMobile from './MenuMobile'
import SectionRight from './SectionRight'


export interface IMenuItem
{
    name: string
    link?: string
    children?: IItem[]
}


const menu: IMenuItem[] = [
    {
        name: "Disvover",
        children: [
                {
                    name: 'Main',
                    value: 'main',
                    icon: <IconMain />
                },
                {
                    name: 'Free',
                    value: 'free',
                    icon: <IconFree />
                },
                {
                    name: 'Best',
                    value: 'best',
                    icon: <IconBest />
                },
                {
                    name: 'Upcoming',
                    value: 'upcoming',
                    icon: <IconUpcoming />
                },
                {
                    name: 'Your Drops',
                    value: 'your-drops',
                    icon: <IconYourDrops />
                }
        ]
    },
    {
        name: "Spaces"
    },
    {
        name: "Leaderboard",
        children: [
            {
                name: 'Projects',
                value: 'main',
                icon: <IconProjects />
            },
            {
                name: 'Players',
                value: 'free',
                icon: <IconPlayers />
            },
        ]
    },
    {
        name: "More",
        children: [
            {
                name: 'Docs',
                icon: <IconDocs />
            },
            {
                name: 'Careers',
                icon: <IconCareers />
            },
            {
                name: 'Brand kit',
                icon: <IconBrandKit />
            },
            {
                name: 'Media',
                icon: <IconMedia />
            },
            {
                name: 'Support',
                icon: <IconSupport />
            },
        ]
    }
]


export default function Header() {

    return <header className={css.header}>
        <Container className={css.headerContainer}>
            <Link href='/'>
                <Image className={css.logo} src={logo} alt='logo' />
            </Link>
            <Menu items={menu}/>
            <SectionRight/>
        </Container>
        <MenuMobile items={menu}/>
    </header>
}