'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Box, Text, Flex, Badge, Switch } from '@radix-ui/themes'
import { MdCopyAll, MdDelete } from "react-icons/md";
import c from 'classnames';

import Card from '@/shared/ui/Card'
import Button from '@/shared/ui/Button'

import css from './index.module.scss'
import iconChain from './img/icon-chain.png'


interface IChainItem
{
    active?: boolean
}


export default function CardWallet(props: IChainItem) {
    const [active, setActive] = useState(!!props.active)

    return <Card.Root className={c(css.root, !active && css.rootInactive)}>
        <Card.Body>
            <Flex justify='between' align='start' mb='5'>
                <Text>
                    User name
                </Text>
                <Flex align='center' gap='3'>
                    <Text>EVM chain</Text>
                    <Box className={css.badge}>
                        {
                            active ?
                                <Badge color='green'>Active</Badge>
                            :
                                <Badge color='red'>Inactive</Badge>
                        }
                    </Box>
                    <Switch defaultChecked={!!props.active} onCheckedChange={ e => setActive(e) }/>
                </Flex>
            </Flex>
            <Flex justify='between' align='end'>
                <Flex>
                    {
                        [...Array(4)].map((_, index) =>
                            <Box
                                key={index}
                                className={css.icon}
                            >
                                <Image
                                    src={iconChain}
                                    alt='icon'
                                />
                            </Box>
                        )
                    }
                </Flex>
                <Flex align='center' gap='2'>
                    <Box className={css.hash}>
                        <Text className={css.hashStart}>56uy56u5</Text>gf4g
                    </Box>
                    <Button icon size='sm'>
                        <MdCopyAll/>
                    </Button>
                    <Button icon size='sm'>
                        <MdDelete/>
                    </Button>
                </Flex>
            </Flex>        
        </Card.Body>
    </Card.Root>
}