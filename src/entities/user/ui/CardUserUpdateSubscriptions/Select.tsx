'use client'
import { Box, Skeleton, Flex } from "@radix-ui/themes"

import { useUserSelfUpdate } from "@/entities/user/api"
import { IUser } from '@/entities/user/model'
import { useToast } from "@/shared/ui/Toast"
import Select from "@/shared/ui/Select"
import Card from "@/shared/ui/Card"


interface ISwitch {
    object?: IUser
    name: keyof IUser
}


export default function Switch(props: ISwitch) {

    const { fire } = useToast()

    const { mutateAsync } = useUserSelfUpdate()

    const handleChange = (value: string) => {
        mutateAsync({
            [props.name]: value
        }).then(() =>
            fire({
                'text': 'Subscription settings changed!'
            })
        )
    }

    if (!props.object) {
        return <Skeleton>
            <Card.Root>
                <Flex p='3'>Skeleton</Flex>
            </Card.Root>
        </Skeleton> 
    }

    return <Select.Root defaultValue={props.object?.[props.name] as string} onValueChange={ handleChange }>
        <Select.Trigger>
            <Box>
                <Card.Root>
                    <Flex p='3' align='center' justify='between' gap='3'>
                        <Select.Value placeholder="Select a frequency..." />
                        <Select.Icon />
                    </Flex>
                </Card.Root>
            </Box>
        </Select.Trigger>
        <Select.Content>
            <Select.Item value="fast">As fast as possible</Select.Item>
            <Select.Item value="hour">Every hour</Select.Item>
            <Select.Item value="day">Every day</Select.Item>
            <Select.Item value="week">Every week</Select.Item>
            <Select.Item value="month">Every month</Select.Item>
        </Select.Content>
    </Select.Root>
}