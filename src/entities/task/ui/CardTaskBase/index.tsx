import { Flex, Box, Text, Skeleton } from "@radix-ui/themes"

import { ITasksBase } from "@/entities/task/model"
import Card from "@/shared/ui/Card"

import css from './index.module.scss'


interface ICardTaskBase
{
    object?: ITasksBase
    buttons?: React.ReactNode
    children?: React.ReactNode
}


export default function CardTaskBase(props: ICardTaskBase) {

    return <Box mb='3'>
        <Skeleton loading={!props.object}>
            <Card.Root>
                <Box
                    p='2'
                    pl={{
                        initial: '2',
                        sm: '5'
                    }}
                >
                    <Flex
                        justify='between'
                        align='center'
                        direction={{
                            initial: 'column',
                            sm: 'row'

                        }}
                        gap='3'
                    >
                        <Box>
                            {props.object?.title} - <Text className={css.points}>{props.object?.reward} points</Text>
                        </Box>
                        <Flex gap='3' className={css.buttons}>
                            {props.buttons}
                        </Flex>
                    </Flex>
                    {props.children}
                </Box>
            </Card.Root>
        </Skeleton>
    </Box>
}