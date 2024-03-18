'use client'
import { Text, Flex, Box, Skeleton } from "@radix-ui/themes"
import { FaInfoCircle } from "react-icons/fa"
import TableLeaderboard from "@/entities/user/ui/TableLeaderboard"

import { useUserSelf } from "@/entities/user/api"
import Card from "@/shared/ui/Card"

import css from './index.module.scss'


export default function CardUserReferralInfo() {
    const {data, isLoading} = useUserSelf()

    return <Card.Root tabulated value='info'>
        <Card.Head>
            <FaInfoCircle/>
            Referral info
        </Card.Head>
        <Card.Body>
            <Flex className={css.wrapper} direction='column' gap='4'>
                <Box>
                    <Text as='p'>
                        <Skeleton loading={isLoading}>
                            Total referrals:
                            &nbsp;
                            <Text className={css.lighted}>
                                {data?.referral_count}
                            </Text>
                        </Skeleton>
                    </Text>
                    <Text as='p'>
                        <Skeleton loading={isLoading}>
                            Quote of referrals:
                            &nbsp;
                            <Text className={css.lighted}>
                                {data?.referral_quote}
                            </Text>
                        </Skeleton>
                    </Text>
                </Box>
                <TableLeaderboard/>
                <Box>
                    <Text as='p' size='5' color="gray">Note:</Text>
                    <Text as='p'>
                    Your daily invitation limit is equal to the number of your current referrals. Exceeding the daily invitation limit will invalidate the code for the rest of the day.
                    </Text>
                </Box>
            </Flex>
        </Card.Body>
    </Card.Root> 
}