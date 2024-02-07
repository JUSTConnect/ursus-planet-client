'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import css from './index.module.scss'
import crown from './img/crown.png'
import asterisk from './img/asterisk.png'
import wallet1 from './img/wallet-1.png'
import wallet2 from './img/wallet-2.png'
import iconSettings from './img/settings.png'

import { useUsersSelf } from '@/hooks/react-query/users'
import Container from '@/components/core/Container'
import Avatar from '@/components/Avatar'
import Button from '@/components/core/Button'
import Skeleton from '@/components/core/Skeleton'


interface Props
{
    showButtonSettings?: boolean
}

export default function Top(props: Props)
{
    const {data, isLoading} = useUsersSelf()
    const pathname = usePathname()

    return <Container className={css.wrapper}>
        <Container className={css.top}>
            <Avatar isLoading={isLoading} colors={data} src={data?.avatar} className={css.avatar}/>
            {/* <Link href='/account'>
            </Link> */}
            <div className={css.info}>
                <div className={css.points}>
                    <div className={css.point}>
                        <Image
                            className={css.pointIcon}
                            src={ crown }
                            alt='crown'
                        />
                        {Number.isInteger(data?.points) ? '...' : <Skeleton length={3}/>}
                    </div>
                    <div className={css.point}>
                        <Image
                            className={css.pointIcon}
                            src={ asterisk }
                            alt='asterisk'
                        />
                        {Number.isInteger(data?.points) ? data?.points : <Skeleton length={3}/>}
                    </div>
                </div>
                <div className={[css.username, data?.username===null && css.usernameDisabled].join(' ')}>
                    {data?.username===null ? 'No Username' : data?.username || <Skeleton length={10}/>}
                </div>
                <div className={css.button}>
                    {/* <div className={ css.wallets }>
                        <Image className={css.wallet} src={wallet1} alt='wallet'/>
                    </div> */}
                    {
                        !pathname.startsWith('/settings') &&
                            <>
                                <Link href='/settings/profile'>
                                    <Button className={css.buttonSettings}>Settings</Button>
                                </Link>
                                <Link className={css.iconSettings} href='/settings'>
                                    <Image src={iconSettings} alt='icon-settings'/>
                                </Link>
                            </>
                    }
                </div>
                
            </div>
        </Container>
    </Container>
}