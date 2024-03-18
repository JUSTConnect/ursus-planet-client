import {
    Heading,
    Box,
    Flex
} from "@radix-ui/themes"
import { AiFillTrophy } from "react-icons/ai";

import Select from "@/shared/ui/Select"
import Container from "@/shared/ui/Container"
import Button from "@/shared/ui/Button"

import css from './index.module.scss'


export default function GamesBest() {
    return <Container>
        <Box my='9'>
            <Flex
                justify='between'
                align='center'
                gap='3'
                direction={{
                    initial: 'column',
                    sm: 'row'
                }}
            >
                <Heading size='9'>Best games</Heading>
                <Select.Root defaultValue="all_prize">
                    <Select.Trigger>
                        <Box
                            className={css.button}
                        >
                            <Button
                                wideWidth
                                color="dark"
                            >
                                <Flex align='center' gap='2'>
                                    <AiFillTrophy/><Select.Value/>
                                </Flex>
                                <Select.Icon/>
                            </Button>
                        </Box>
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Item value="all_prize">
                            All prize                    
                        </Select.Item>
                        <Select.Item value="filtered">
                            Filtered    
                        </Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>
        </Box>
    </Container>
}