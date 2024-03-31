import {
    Heading,
    Box,
    Flex
} from "@radix-ui/themes"
import { AiFillTrophy } from "react-icons/ai";

import Select from "@/shared/ui/Select"
import Container from "@/shared/ui/Container"
import Button from "@/shared/ui/Button"
import SelectNew from '@/shared/ui/SelectNew'

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
                <SelectNew.Root defaultValue={{value: 'all_prize', name: 'All prize'}}>
                    <SelectNew.Trigger>
                        <Box
                            className={css.button}
                        >
                            <Button
                                wideWidth
                                color="dark"
                            >
                                <Flex align='center' gap='2'>
                                    <AiFillTrophy/><SelectNew.Value/>
                                </Flex>
                                <Select.Icon/>
                            </Button>
                        </Box>
                    </SelectNew.Trigger>
                    <SelectNew.Content>
                        <SelectNew.Item value="all_prize" name="All prize"/>
                        <SelectNew.Item value="filtered" name='Filtered'/>
                    </SelectNew.Content>
                </SelectNew.Root>
            </Flex>
        </Box>
    </Container>
}