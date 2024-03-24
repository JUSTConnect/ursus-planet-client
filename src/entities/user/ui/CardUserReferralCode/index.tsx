'use client'
import { useState } from "react"
import Image from "next/image"
import { Box, Flex, Text, Link, Skeleton } from "@radix-ui/themes"
import { FaLink, FaInfoCircle } from "react-icons/fa"
import { CheckCircledIcon } from "@radix-ui/react-icons"

import { useUserSelf } from "@/entities/user/api"
import ModalReferralCode from "@/entities/user/ui/ModalReferralCode"
import Card from "@/shared/ui/Card"
import Copy from "@/shared/ui/Copy"
import TextField from "@/shared/ui/TextField"
import Button from "@/shared/ui/Button";

import css from './index.module.scss'
import figure from './img/figure.svg'
import messageBottom from './img/message-bottom.svg'


export default function CardUserReferralCode() {
    const [modal, setModal] = useState(false)
    const {data, isLoading} = useUserSelf()

    return <Card.Root tabulated value='code'>
        <Card.Head>
            <FaLink/>
            Referral code
        </Card.Head>
        <Card.Body>
            <Flex justify='center' align='center' gap='5' my='0'>
                <Box className={css.figureWrapper}>
                    <Image
                        className={css.figure}
                        src={figure}
                        alt='figure'
                    />
                </Box>
                <Flex className={css.content} direction='column' gap='3'>
                    <Skeleton loading={isLoading}>
                        <Box
                            className={css.message}
                            mb='4'
                            p={{
                                sm: '4'
                            }}
                        >
                            <Text as="p">
                                Enter referral code - <Text className={css.points}>900 points</Text>
                            </Text>
                            <Text as="p">
                                Referral player - <Text className={css.points}>2% of points</Text>
                            </Text>
                            <Image
                                className={css.messageBottom}
                                src={messageBottom}
                                alt='bottom'
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton loading={isLoading}>
                    <Flex align='center' gap='3'>
                            <Box>
                                <FaInfoCircle/>
                            </Box>
                            you can get referral code in our telegram or discord chat
                    </Flex>
                    </Skeleton>
                    <TextField.Root>
                        {
                            data?.referrer &&
                                <TextField.Slot>
                                    <CheckCircledIcon color="green"/>
                                </TextField.Slot>
                        }
                        <Skeleton loading={isLoading}>
                            <TextField.Input
                                onClick={ () => !data?.referrer && setModal(true)}
                                defaultValue={data?.referrer}
                                readOnly
                                placeholder="Enter referral code"
                            />
                        </Skeleton>
                    </TextField.Root>
                </Flex>
            </Flex>
        </Card.Body>
        <Card.Bottom>
            <Skeleton loading={isLoading}>
                <Card.Root>
                    <Flex
                        p='3'
                        justify='between'
                        align='center'
                        gap='3'
                        direction={{
                            initial: 'column',
                            sm: 'row'
                        }}
                    >
                        {
                            !!data?.username ?
                                <>
                                    <Text>
                                        <Text color="gray">
                                            Your referral code :
                                        </Text> {data?.username}
                                    </Text>
                                    <Flex gap='2'>
                                        <Copy.Root text={`${window.location.origin}/?referrer=${data.username}`} success_message="Referral link copied to clipboard!">
                                            <Copy.Trigger>
                                                <Button color='white' size="sm"><Copy.Icon/>Copy as link</Button>
                                            </Copy.Trigger>
                                        </Copy.Root>
                                        <Copy.Root text={data.username} success_message="Referral code copied to clipboard!">
                                            <Copy.Trigger>
                                                <Button color='white' size="sm"><Copy.Icon/>Copy as code</Button>
                                            </Copy.Trigger>
                                        </Copy.Root>
                                    </Flex>
                                </>
                            :
                                <Text>To have referral code you must <Link href="/settings/profile">set your username</Link> and set referral code above!</Text>
                        }
                    </Flex>
                </Card.Root>
            </Skeleton>
        </Card.Bottom>
        <ModalReferralCode active={modal} setActive={setModal}/>
    </Card.Root> 
}