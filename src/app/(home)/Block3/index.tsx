'use client'

import { useState } from 'react'
import Image from 'next/image'

import indexCss from './index.module.scss'
import css from '../index.module.scss'
import iconViewMore from '../img/icon-view-more.png'
import iconPrize from '../img/icon-prize.png'

import Container from '@/components/core/Container'
import Stack from '@/components/core/Stack'
import Typography from '@/components/core/Typography'
import Dropdown from '@/components/core/Dropdown'
import DropdownButton from '@/components/core/Dropdown/DropdownButton'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'


export default function Block4() {
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
    const [filter, setFilter] = useState<string|undefined>(filters[0].value)

    return <div className={indexCss.wrapper}>
        <div className={indexCss.blur} />
        <Container className={css.container}>
            <Stack fullWidth className={css.headingStack}>
                <Typography variant='h2' color='primary'>
                    Best games
                </Typography>
                <Stack className={css.headingButtons}>
                    <Dropdown
                        className={css.headingDropdown}
                        items={filters}
                        onChoose={ value => setFilter(value) }
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
    </div>
}