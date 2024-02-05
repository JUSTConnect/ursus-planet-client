import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'

import css from './index.module.scss'
import IconNotifications from '../img/IconNotifications'


export default function DropdownNotifications() {
    const [isActive, setIsActive] = useState(false)
    const self = useRef<HTMLAnchorElement>(null)

    useEffect(
        () => document.addEventListener('mousedown', e => {
            self.current &&
                !self.current.contains(e.target as Node) &&
                setIsActive(false)
        }), []
    )

    return <Link href='#' className={css.wrapper} ref={self}>
        <div className={css.iconNotifications} onClick={ () => setIsActive(!isActive) }>
            <IconNotifications />
        </div>
        <div className={[css.dropdownWrapper, isActive && css.dropdownWrapperActive].join(' ')}>
            <div className={css.dropdown}>
                <Typography variant='p'>You have 50 unread notifications</Typography>
                <div className={css.dropdownItems}>
                    {
                        Array.from(Array(5)).map((_, index) =>
                            <div key={index} className={css.dropdownItem}>
                                Claim Ursas game - Season 21 one of your table finish... 
                            </div>
                        )
                    }
                </div>
                <Link href='/settings/notifications'>
                    <Button
                        fullWidth
                        color='gray'
                    >
                        View all notifications
                    </Button>
                </Link>
            </div>
        </div>
    </Link>
}