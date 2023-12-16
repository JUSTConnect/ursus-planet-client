'use client'

import { useState } from 'react'
import Image from 'next/image'

import css from '../index.module.scss'
import iconViewMore from '../img/icon-view-more.png'
import iconPrize from '../img/icon-prize.png'


import Container from '@/components/core/Container'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'
import Stack from '@/components/core/Stack'
import Dropdown from '@/components/core/Dropdown'
import DropdownButton from '@/components/core/Dropdown/DropdownButton'
import DropdownMenu from '@/components/core/Dropdown/DropdownMenu'


export default function Block5() {

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
        <Stack fullWidth className={css.headingStack}>
                <Typography variant='h2'>
                    Upcoming games
                </Typography>
                <Stack className={css.headingButtons}>
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
                        <DropdownMenu active={dropdownActive} items={filters} setValue={setFilter}/>
                    </Dropdown>
                    <Button
                        className={css.buttonViewMore}
                        color='gray'
                        iconEnd={
                            <Image src={iconViewMore} alt="icon" className={css.buttonViewMoreIcon} />
                        }>
                        <div className={css.buttonViewMoreText}>
                            View more
                        </div>
                    </Button>
                    <ButtonIcon
                        color='gray'
                        className={css.buttonViewMoreMobile}
                    >
                        <Image src={iconViewMore} alt="icon" />
                    </ButtonIcon>
                </Stack>
            </Stack>
    </Container>
}