import { memo, useState, useEffect } from "react"
import { Flex, Box } from "@radix-ui/themes"
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import c from "classnames"

import Card from "@/shared/ui/Card"

import IMessage from './Message.props'

import css from './index.module.scss'


function Message({
    text,
    type='primary'
}: IMessage) {
    const [active, setActive] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setActive(false)
        }, 10000)
    }, [])

    return <Card.Root className={c(
        css.card,
        css[type],
        !active && css.cardHide
    )}>
        <Card.Body>
            <Flex align='center' gap='3'>
                {
                    type === 'error' && <Box><MdError/></Box>
                }
                {
                    type === 'success' && <Box><FaCheckCircle/></Box>
                }
                {text}
            </Flex>
        </Card.Body>
    </Card.Root>
}


export default memo(Message)