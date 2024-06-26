'use client'
import { Table, Text, Flex, Skeleton } from "@radix-ui/themes"


import { useReferralProgramLeaderboard } from "@/entities/referral_program/api"
import Copy from "@/shared/ui/Copy"

import css from './index.module.scss'


export default function TableLeaderboard() {

    const { data, isLoading } = useReferralProgramLeaderboard()

    return <Skeleton loading={isLoading}>
        <Table.Root className={css.table}>
            <Table.Header className={css.header}>
                <Table.Row>
                    <Table.ColumnHeaderCell className={css.position}>#</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className={css.address}>Address</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell align="right" pr='5'>Referrals</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    data?.results.map((user, index) =>
                        <Table.Row
                            key={index}
                        >
                            <Table.RowHeaderCell className={css.position}>{index + 1}</Table.RowHeaderCell>
                            <Table.RowHeaderCell>{user.username}</Table.RowHeaderCell>
                            <Table.Cell>
                                <Copy.Root text="Address" success_message="Address copied to clipboard!">
                                    <Flex gap='2' align='center'>
                                        <Text className={css.address}>
                                            {user.wallets[0].slice(0, 7)}...{user.wallets[0].slice(-4)}
                                        </Text>
                                    </Flex>
                                </Copy.Root>
                            </Table.Cell>
                            <Table.Cell className={css.lighted} align="right" pr='5'>{user.referral_count}</Table.Cell>
                        </Table.Row>
                    )
                }
            </Table.Body>
        </Table.Root>
    </Skeleton>
}