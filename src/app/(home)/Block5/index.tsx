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


export default function Block6() {

    const filters = [
        {
            name: 'All prize',
            value: 'all_prize'
        },
        {
            name: 'Some value',
            value: 'some_value'
        }
    ]

    const [dropdownActive, setDropdownActive] = useState(false)
    const [filter, setFilter] = useState<unknown>(filters[0].value)

    return <Container className={css.container}>
        <Stack fullWidth className={[css.headingStack, indexCss.headingStack].join(' ')}>
            <Button hovered className={indexCss.buttonSpace}>Space</Button>
            <Stack className={[css.headingButtons, indexCss.headingButtonsSpace].join(' ')}>
                <Dropdown
                    className={css.headingDropdown}
                    onChoose={ value => setFilter(value) }
                    items={filters}
                >
                    <DropdownButton
                        onClick={ () => setDropdownActive(!dropdownActive) }
                        iconStart={<Image src={iconPrize}
                            alt="icon"
                            className={css.headingDropdownIcon} />
                        }
                        color='dark'
                        hovered={true}
                    >
                        { filters.filter(item => item.value === filter)[0]?.name }
                    </DropdownButton>
                </Dropdown>
                <Button
                    className={indexCss.buttonTrustedProjects}
                    color='white'
                    iconEnd={
                        <Image src={iconViewMore} alt="icon" className={css.buttonViewMoreIcon} />
                    }
                    hovered
                >
                    <div className={css.buttonViewMoreText}>
                        2k+ on Trusted projects
                    </div>
                </Button>
            </Stack>
        </Stack>
    </Container>
}