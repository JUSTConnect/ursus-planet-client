'use client'
import { Box, Skeleton, Flex } from "@radix-ui/themes"

import { useMeUpdate } from "@/entities/users/api"
import { IUser } from '@/entities/users/model'
import { useToast } from "@/shared/ui/Toast"
import Select from "@/shared/ui/Select"
import SelectNew from "@/shared/ui/SelectNew"
import Card from "@/shared/ui/Card"

import {getValueName} from './utils'

import css from './index.module.scss'


interface ISwitch {
    object?: IUser
    name: keyof IUser
}


export default function Switch(props: ISwitch) {

    const { fire } = useToast()

    const { mutateAsync } = useMeUpdate()

    const handleChange = (value?: string) => {
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

    return <SelectNew.Root
        defaultValue={{value: props.object?.[props.name] as string, name: getValueName(props.object?.[props.name] as string)}}
        placeholder="Select frequency"
        onValueChange={ handleChange }
        className={css.selectRoot}
    >
        <SelectNew.Trigger>
            <Box>
                <Card.Root>
                    <Flex p='3' align='center' justify='between' gap='3'>
                        <SelectNew.Value/>
                        <Select.Icon />
                    </Flex>
                </Card.Root>
            </Box>
        </SelectNew.Trigger>
        <SelectNew.Content>
            <SelectNew.Item value="fast" name="As fast as possible"/>
            <SelectNew.Item value="hour" name="Every hour"/>
            <SelectNew.Item value="day" name="Every day"/>
            <SelectNew.Item value="week" name="Every week"/>
            <SelectNew.Item value="month" name="Every month"/>
        </SelectNew.Content>
    </SelectNew.Root>
}