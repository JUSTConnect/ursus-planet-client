import { useSelector } from "react-redux";
import Image from "next/image"
import {
    Box,
    Flex,
    Grid,
    Text
} from "@radix-ui/themes"
import c from "classnames";
import { IoTrophy } from "react-icons/io5"
import { FaStar } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { PiDatabaseFill } from "react-icons/pi";

import { RootState } from "@/store";
import Button from "@/shared/ui/Button"

import SectionHeading from './SectionHeading'
import SectionValue from './SectionValue'

import css from './index.module.scss'
import iconPrize from './img/icon-prize.svg'
import nft1 from './img/nft-1.jpg'
import nft2 from './img/nft-2.jpg'
import nft3 from './img/nft-3.jpg'


export default function SectionPrize() {
    const { seasonActive, seasonCurrent } = useSelector((state: RootState) => state.tmp)

    return <Box className={css.section}>
        <SectionHeading icon={iconPrize}>
            Game prize
        </SectionHeading>
        <Grid
            gap={{
                initial: '3',
                md: '6'
            }}
            columns={{
                initial: '1',
                xs: '2',
                md: '3'
            }}
        >
            <Flex
                className={c("gmd", css.sectionBlock)}
                direction='column'
                gap='4'
            >
                <Flex gap='3' align='center'>
                    <Text size='6'>NFT</Text>
                    <Text>Raffle</Text>
                </Flex>
                <SectionValue
                    name='Win list'
                    value='1 player'
                    icon={IoTrophy}
                />
                {
                    seasonActive === seasonCurrent &&
                        <Box mt='3'>
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
            <Flex direction='column' gap='4' mb='5'>
                <Flex className={c("lmd", "gxs", css.sectionBlock)} gap='3' align='center'>
                    <Text size='6'>NFT</Text>
                    <Text>Raffle</Text>
                </Flex>
                <Text
                    weight='bold'
                >
                    Smyth
                    <Text className="lxs">#4323</Text>
                </Text>
                <Flex gap='3'>
                    <Image
                        className={css.prize}
                        src={seasonActive === 1 ? nft1 : seasonActive === 2 ? nft2 : nft3 }
                        alt="prize"
                    >

                    </Image>
                </Flex>
                <Text className='gxs'>#4323</Text>
            </Flex>
            <Flex className={css.sectionBlock} direction='column' gap='4'>
                <SectionValue
                    className={c("lmd", "gxs")}
                    name='Win list'
                    value='1 player'
                    icon={IoTrophy}
                />
                <SectionValue
                    name='Participants'
                    value='100'
                    icon={FaStar}
                />
                <SectionValue
                    name='Base coin'
                    value='Matic'
                    icon={FaGem}
                />
                <SectionValue
                    name='Start price'
                    value='0.01 MATIC'
                    icon={PiDatabaseFill}
                />
            </Flex>
        </Grid>
    </Box>
}