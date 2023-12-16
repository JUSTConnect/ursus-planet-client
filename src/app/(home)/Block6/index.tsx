'use client'

import { useState } from 'react'
import Image from 'next/image'

import css from '../index.module.scss'
import indexCss from './index.module.scss'
import iconViewMore from '../img/icon-view-more.png'
import iconPrize from '../img/icon-prize.png'


import Container from '@/components/core/Container'
import Button from '@/components/core/Button'
import Stack from '@/components/core/Stack'
import Dropdown from '@/components/core/Dropdown'
import DropdownButton from '@/components/core/Dropdown/DropdownButton'
import DropdownMenu from '@/components/core/Dropdown/DropdownMenu'


export default function Block6() {

    const filters = [
        {
            name: 'All prizes',
            value: 'value'
        },
        {
            name: 'Some value',
            value: 'value'
        }
    ]

    const [filter, setFilter] = useState(filters[1])
    const [dropdownActive, setDropdownActive] = useState(false)

    return <Container className={css.container}>
        <Stack fullWidth className={[css.headingStack, indexCss.headingStack].join(' ')}>
            <Button className={indexCss.buttonSpace}>Space</Button>
            <Stack className={[css.headingButtons, indexCss.headingButtonsSpace].join(' ')}>
                <Dropdown
                    className={css.headingDropdown}
                >
                    <DropdownButton
                        onClick={ () => setDropdownActive(!dropdownActive) }
                        iconStart={<Image src={iconPrize}
                            alt="icon"
                            className={css.headingDropdownIcon} />
                        }
                        color='dark'
                    >
                        {filter.name}
                    </DropdownButton>
                    <DropdownMenu active={dropdownActive} items={filters} setValue={setFilter} />
                </Dropdown>
                <Button
                    className={indexCss.buttonTrustedProjects}
                    color='white'
                    iconEnd={
                        <Image src={iconViewMore} alt="icon" className={css.buttonViewMoreIcon} />
                    }>
                    <div className={css.buttonViewMoreText}>
                        2k+ on Trusted projects
                    </div>
                </Button>
            </Stack>
        </Stack>
    </Container>
}