'use client'
import { memo } from 'react'
import { Box, Flex } from '@radix-ui/themes'

import IMessage from './Message.props'
import Message from './Message'

import css from './index.module.scss'


interface IBuffer
{
    messages: IMessage[]
}


function Buffer({messages}: IBuffer) {
    return <Box p='3' className={css.buffer}>
        <Flex direction='column' gap='2'>
            {
                messages.map((message, index) => 
                    <Message
                        key={index}
                        text={message.text}
                        type={message.type}
                    />
                )
            }
        </Flex>
    </Box>   
}


export default memo(Buffer)