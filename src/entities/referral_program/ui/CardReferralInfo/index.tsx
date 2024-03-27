'use client'
import { Text, Flex, Box, Skeleton } from "@radix-ui/themes"
import { FaInfoCircle } from "react-icons/fa"
import TableLeaderboard from "@/entities/referral_program/ui/TableLeaderBoard"

import { useMe } from "@/entities/users/api"
import { useMeClaim } from "@/entities/referral_program/api"
import { useToast } from "@/shared/ui/Toast"
import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button"

import css from './index.module.scss'


export default function CardUserReferralInfo() {
    const {fire} = useToast()
    const {data, isLoading} = useMe()
    const {mutateAsync} = useMeClaim()

    const handleClaim = () => {
        mutateAsync(null).then(() => fire({type: 'success', text: 'Referrer reward collected!'}))
    }

    return <Card.Root tabulated value='info'>
        <Card.Head>
            <FaInfoCircle/>
            Referral info
        </Card.Head>
        <Card.Body>
            <Flex className={css.wrapper} direction='column' gap='4'>
                <Flex justify='between' mb='3'>
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
                    {
                        Number(data?.points_referral) ?
                            <Button color="white" onClick={handleClaim}>Claim <Text className="gsm">reward</Text>: {Number(data?.points_referral)}</Button>
                        : null
                    }
                </Flex>
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