import { Box, Text } from '@radix-ui/themes'
import Link from 'next/link'

import Button from '@/shared/ui/Button'
import Dropdown from '@/shared/ui/Dropdown'


import css from './index.module.scss'
import IconNotifications from '../img/IconNotifications'


export default function DropdownNotifications() {

    return <Dropdown.Root className={css.root}>
        <Dropdown.Trigger>
            <Button icon>
                <IconNotifications />
            </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu className={css.menu}>
            <Box className={css.menuInner}>
                <Text as='p'>You have 50 unread notifications</Text>
                {
                    Array.from(Array(5)).map((_, index) =>
                        <Link key={index} href='/settings/notifications'>
                            <Box className={css.menuItem}>
                                Claim Ursas game - Season 21 one of your table finish... 
                            </Box>
                        </Link>
                    )
                }
                <Box mt='2'>
                    <Link href='/settings/notifications'>
                        <Button
                            fullWidth
                            color='gray'
                        >
                            View all notifications
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Dropdown.Menu>
    </Dropdown.Root>
}