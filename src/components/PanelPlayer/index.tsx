'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { IoMdSettings } from "react-icons/io";
import { IoSend } from "react-icons/io5";

import css from './index.module.scss'
import crown from './img/crown.png'
import asterisk from './img/asterisk.png'

import { useUsersSelf } from '@/hooks/react-query/users'
import Container from '@/components/core/Container'
import Avatar from '@/components/Avatar'
import Button from '@/components/core/Button'
import Skeleton from '@/components/core/Skeleton'


export default function Top()
{
    const {data, isLoading, isError} = useUsersSelf()
    const pathname = usePathname()

    return <Container className={css.wrapper}>
        <Container className={css.top}>
            <Avatar isLoading={isLoading} colors={data} src={data?.avatar} className={css.avatar}/>
            <div className={css.info}>
                <div className={css.points}>
                    {
                        isLoading || isError ? <Skeleton length={25}/> :
                        <>
                            <div className={css.point}>
                                <Image
                                    className={css.pointIcon}
                                    src={ crown }
                                    alt='crown'
                                />
                                ...
                            </div>
                            <div className={css.point}>
                                <Image
                                    className={css.pointIcon}
                                    src={ asterisk }
                                    alt='asterisk'
                                />
                                {Number(data?.points)}
                            </div>
                        </>
                    }
                </div>
                <div className={[css.username, (!data?.username?.length || data?.username===null) && css.usernameDisabled].join(' ')}>
                    {
                        isLoading || isError ?
                            <Skeleton length={25}/>
                        :
                        !data?.username?.length || data?.username===null ? `Unknown`
                        :
                        data?.username
                    }
                </div>
                <div className={css.button}>
                    {
                        !pathname.startsWith('/settings') &&
                            <div>
                                <Link href='/settings/profile'>
                                    <Button className={css.buttonSettings} hovered>Settings</Button>
                                </Link>
                                <Link className={css.iconSettings} href='/settings/profile'>
                                    <IoMdSettings/>
                                </Link>
                            </div>
                    }
                    {
                        !pathname.startsWith('/point-system') &&
                        <div>
                            <Link href='/point-system/tasks/'>
                                <Button className={css.buttonSettings} hovered>Point System</Button>
                            </Link>
                            <Link className={css.iconSettings} href='/point-system/tasks/'>
                                <IoSend/>
                            </Link>
                        </div>
                    }
                </div>
                
            </div>
        </Container>
    </Container>
}