import { useSelector } from "react-redux"
import {
    Box,
    Heading,
    Flex,
    Text
} from "@radix-ui/themes"

import { RootState } from "@/store"
import Container from "@/shared/ui/Container"
import Button from "@/shared/ui/Button"

import SectionPrize from './SectionPrize'
import SectionSeason from './SectionSeason'
import SeasonButtons from './SeasonButtons'

import css from './index.module.scss'


export default function MainGame() {
    const { seasonActive, seasonCurrent } = useSelector((state: RootState) => state.tmp)

    return <Container className={css.container}>
        <Flex
            justify='between'
            gap={{
                initial: '5',
                sm: '7',
                md: '9'
            }}
            direction={{
                initial: 'column',
                md: 'row'
            }}
            mb='9'
        >
            <Box>
                <Heading
                    className={css.sectionHeading}
                    style={{position: 'relative', zIndex: '1'}}
                    size='8'
                    mb='5'>
                        Main game
                </Heading>
                <Box className={css.buttonsSeasonDropTop}/>
                <SeasonButtons/>
            </Box>
            <Flex
                justify='between'
                gap={{
                    initial: '4',
                    md: '9'
                }}
            >
                <SectionSeason/>
                <SectionPrize/>
            </Flex>
            {
                seasonActive === seasonCurrent &&
                    <Box className="lmd">
                        <Box mb='4'>
                            <Text as='p' mb='2'>
                                End game
                            </Text>
                            <Box className={css.bar}>
                                <Box></Box>
                            </Box>
                        </Box>
                        <Button color="primary" fullWidth>Enter</Button>
                    </Box>
            }
        </Flex>
    </Container>
}