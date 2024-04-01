'use client'
import Link from 'next/link'
import { Box, Flex } from '@radix-ui/themes'

import Dropdown from '@/shared/ui/Dropdown'
import Container from "@/shared/ui/Container"

import css from './index.module.scss'

import { IMenuItem } from '.'


interface IMenuMobile {
    items: IMenuItem[]
}


export default function MenuMobile(props: IMenuMobile) {

    return <Box className={css.menuMobile}>
        <Container>
            <Flex gap='4'>
                {props.items.map((item, index) =>
                    item.children ?
                        <Dropdown.Root key={index} className={css.dropdown}>
                            <Dropdown.Trigger>
                                <Flex
                                    className={css.menuItem}
                                    align='center'
                                    gap='2'
                                >
                                    {item.name}<Dropdown.Arrow />
                                </Flex>
                            </Dropdown.Trigger>
                            {
                                item.children &&
                                <Dropdown.Menu className={css.dropdownMenu}>
                                    {
                                        item.children.map((children, index) =>
                                            <Dropdown.Item key={index}>
                                                {children.icon}
                                                {children.name}
                                            </Dropdown.Item>
                                        )
                                    }
                                </Dropdown.Menu>
                            }
                        </Dropdown.Root>
                        :
                        <Link
                            key={index}
                            className={css.menuItem}
                            href={item.link || '#'}
                        >
                            {item.name}
                        </Link>
                )}
            </Flex>
        </Container>
    </Box>
}
