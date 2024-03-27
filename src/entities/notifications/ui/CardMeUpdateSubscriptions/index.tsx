'use client'
import {
    Text,
    Flex,
    Skeleton,
} from "@radix-ui/themes"
import { FaBell } from "react-icons/fa"

import { useMe } from "@/entities/users/api"
import Card from "@/shared/ui/Card"

import Switch from './Switch'
import Select from './Select'


export default function CardMeUpdateSubscriptions() {

    const { data, isLoading } = useMe()

    return <Card.Root tabulated value="subscriptions">
        <Card.Head>
            <FaBell /> Subscriptions
        </Card.Head>
        <Card.Body>
            <Flex mb='5' direction='column' gap='3'>
                <Text as="p" size='4'>
                    <Skeleton loading={isLoading}>
                        Cabinet notification
                    </Skeleton>
                </Text>
                <Card.Root>
                    <Skeleton loading={isLoading}>
                        <Flex p='3' justify='between'>
                            E-mail notification
                            {
                                data &&
                                <Switch
                                    object={data}
                                    name={'cabinet_notifications_email'}
                                />
                            }
                        </Flex>
                    </Skeleton>
                </Card.Root>
                <Card.Root>
                    <Skeleton loading={isLoading}>
                        <Flex p='3' justify='between'>
                            Account notification
                            {
                                data &&
                                <Switch
                                    object={data}
                                    name={'cabinet_notifications_account'}
                                />
                            }
                        </Flex>
                    </Skeleton>
                </Card.Root>
                <Select
                    object={data}
                    name="cabinet_notifications_frequency"
                />
            </Flex>
            <Flex direction='column' gap='3'>
                <Text as="p" size='4'>
                    <Skeleton loading={isLoading}>
                        Project notification
                    </Skeleton>
                </Text>
                <Card.Root>
                    <Skeleton loading={isLoading}>
                        <Flex p='3' justify='between'>
                            E-mail notification
                            {
                                data &&
                                <Switch
                                    object={data}
                                    name={'project_notifications_email'}
                                />
                            }
                        </Flex>
                    </Skeleton>
                </Card.Root>
                <Card.Root>
                    <Skeleton loading={isLoading}>
                        <Flex p='3' justify='between'>
                            Account notification
                            {
                                data &&
                                <Switch
                                    object={data}
                                    name={'project_notifications_account'}
                                />
                            }
                        </Flex>
                    </Skeleton>
                </Card.Root>
                <Select
                    object={data}
                    name="project_notifications_frequency"
                />
            </Flex>
        </Card.Body>
        {/* <Card.Bottom>
            <Button wideWidth>Save</Button>
            {
                !!input.current?.files?.length &&
                <Button
                    onClick={() => submit.current?.click()}
                    color='gray'
                    wideWidth
                    hoverToWhite
                >
                    {isPending ? 'Saving...' : 'Save'}
                </Button>
            }
        </Card.Bottom> */}
    </Card.Root>
}
