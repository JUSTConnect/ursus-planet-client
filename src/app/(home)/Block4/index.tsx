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
import DropdownMenu from '@/components/core/Dropdown/DropdownMenu'
import Button from '@/components/core/Button'
import ButtonIcon from '@/components/core/Button/ButtonIcon'


export default function () {
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

    return <div className={indexCss.wrapper}>
        <div className={indexCss.blur} />
        <Container className={css.container}>
            <Stack fullWidth className={css.headingStack}>
                <Typography variant='h2' color='primary'>
                    Best games
                </Typography>
                <div>
                    <Stack className={css.headingButtons}>
                        <Dropdown
                            className={css.headingDropdown}
                        >
                            <DropdownButton
                                iconStart={<Image src={iconPrize}
                                    alt="icon"
                                    className={css.headingDropdownIcon} />
                                }
                                color='dark'
                            >
                                {filter.name}
                            </DropdownButton>
                            <DropdownMenu items={filters} />
                        </Dropdown>
                        <Button
                            className={css.buttonViewMore}
                            color='gray'
                            iconEnd={
                                <Image src={iconViewMore} alt="icon" className={css.buttonViewMoreIcon}/>
                            }>
                            <div className={css.buttonViewMoreText}>
                                View more
                            </div>
                        </Button>
                        <ButtonIcon>
                            <Image src={iconViewMore} alt="icon"/>
                        </ButtonIcon>
                    </Stack>
                </div>
            </Stack>
        </Container>
    </div>
}