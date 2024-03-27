'use client'

import { Box, Flex, Skeleton, Text } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedCounter } from 'react-animated-counter'

import { IoMdSettings } from "react-icons/io";
import { IoSend } from "react-icons/io5";

import css from './index.module.scss'
import crown from './img/crown.png'
import asterisk from './img/asterisk.png'

import { useMe } from '@/entities/users/api'
import Container from "@/shared/ui/Container"
import Avatar from '@/shared/ui/Avatar'
import Button from '@/shared/ui/Button'


export default function PanelPlayer() {
    const { data, isLoading } = useMe()
    const pathname = usePathname()

    return <Container className={css.wrapper}>
        <Container className={css.top}>
            <Flex gap={{
                initial: '5',
                sm: '6'
            }}>
                <Box>
                    <Avatar
                        src={data?.avatar}
                        className={css.avatar}
                        loading={isLoading}
                        colors={data}
                    />
                </Box>
                <Flex direction='column' className={css.content} justify='between'>
                    <Box>
                        <Flex
                            align='center'
                            gap={{
                                initial: '4',
                                sm: '5'
                            }}
                            mb={{
                                initial: '2',
                                sm: '4'
                            }}
                        >
                            <Skeleton loading={isLoading}>
                                <Flex
                                    align='center'
                                    gap={{
                                        initial: '2',
                                        sm: '3'
                                    }}
                                >
                                    <Image
                                        className={css.pointIcon}
                                        src={crown}
                                        alt='crown'
                                    />
                                    ...
                                </Flex>
                            </Skeleton>
                            <Skeleton loading={isLoading}>
                                <Flex
                                    align='center'
                                    gap={{
                                        initial: '2',
                                        sm: '3'
                                    }}
                                >
                                    <Image
                                        className={css.pointIcon}
                                        src={asterisk}
                                        alt='asterisk'
                                    />
                                    <AnimatedCounter fontSize='1' color='white' value={Number(data?.points)} />
                                </Flex>
                            </Skeleton>
                        </Flex>
                        <Text
                            as='p'
                            size={{
                                initial: '6',
                                sm: '8'
                            }}
                        >
                            <Skeleton loading={isLoading}>
                                {!data?.username?.length ? `Unknown` : data.username}
                            </Skeleton>
                        </Text>
                    </Box>
                    <Box className={css.buttons}>
                        {
                            !pathname.startsWith('/settings') &&
                            <Box>
                                <Link href='/settings/profile'>
                                    <Skeleton loading={isLoading}>
                                        <Button
                                            className={css.button}
                                            wideWidth
                                            color='primary'
                                        >
                                            Settings
                                        </Button>
                                    </Skeleton>
                                </Link>
                                <Link
                                    className={css.iconSettings}
                                    href='/settings/profile'
                                >
                                    <IoMdSettings />
                                </Link>
                            </Box>
                        }
                        {
                            !pathname.startsWith('/point-system') &&
                            <Box>
                                <Link href='/point-system/tasks/'>
                                    <Skeleton loading={isLoading}>
                                        <Button
                                            className={css.button}
                                            wideWidth
                                            color='primary'
                                        >
                                            Point System
                                        </Button>
                                    </Skeleton>
                                </Link>
                                <Link
                                    className={css.iconSettings}
                                    href='/point-system/tasks/'
                                >
                                    <IoSend />
                                </Link>
                            </Box>
                        }
                    </Box>

                </Flex>
            </Flex>
        </Container>
    </Container>
}