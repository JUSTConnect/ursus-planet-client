import { Link } from '@radix-ui/themes'
import Image from 'next/image'
import { Box, Grid, Text, Flex } from '@radix-ui/themes'
import c from 'classnames'

import css from './index.module.scss'
import logo from './img/logo.svg'
import lust from './img/lust.svg'
import lustMd from './img/lust-md.svg'
import lustSm from './img/lust-sm.svg'

import Container from "@/shared/ui/Container"


export default function Footer() {
    return <footer className={css.footer}>
        <Box my='9'>
            <Container>
                <Grid
                    gap='5'
                    mb='6'
                    columns={{
                        md: '2'
                    }}
                >
                        <Box mb='6'>
                            <Box mb='3'>
                                <Link href="/">
                                    <Image className={css.logo} src={logo} alt='logo' />
                                </Link>
                            </Box>
                            <Text className={css.description} as='p' color='gray'>
                                Ursas Planet is the first raffle SocialFi platform for creating a community on Web3, helping to unite projects and communities for mutual benefit. Ursas Planet strives to popularize the launch of new Web3 projects and help them grow.
                            </Text>
                        </Box>
                        <nav>
                            <Grid
                                gap='4'
                                columns={{
                                    initial: '2',
                                    sm: '4'
                                }}
                            >
                                <Flex direction='column'>
                                    <Text color='gray' mb='3'>
                                        Planet
                                    </Text>
                                    <Link href='/'>Discover</Link>
                                    <Link className={c(css.linkDisabled)} href='#'>Universe</Link>
                                    <Link className={c(css.linkDisabled)} href='#'>Leaderboard</Link>
                                </Flex>
                                <Flex direction='column'>
                                    <Text color='gray' mb='3'>
                                        About
                                    </Text>
                                    <Link href='/more/about-urs/mission'>About Urs</Link>
                                    <Link href='/more/docs'>Documents</Link>
                                    <Link href='/more/docs/gitbook'>Gitbook</Link>
                                    <Link href='/more/careers'>Careers</Link>
                                </Flex>
                                <Flex direction='column'>
                                    <Text color='gray' mb='3'>
                                        Community
                                    </Text>
                                    <Link href='https://medium.com/@TEDDY_Arrr'>Medium</Link>
                                    <Link href='https://twitter.com/UrsasPlanet'>Twitter</Link>
                                    <Link href='https://t.me/ursasplanet'>Telegram</Link>
                                    <Link href='https://discord.gg/ursas'>Discord</Link>
                                </Flex>
                                <Flex direction='column'>
                                    <Text color='gray' mb='3'>
                                        Support
                                    </Text>
                                    <Link href='/more/support'>Help</Link>
                                </Flex>
                            </Grid>
                        </nav>
                </Grid>
                <Text as='p' align='center' color='gray'>
                    Made by ju7tconnect © 2023
                </Text>
            </Container>
        </Box>
        <Image className={c(css.lust, css.lustLg)} src={lust} alt='lust' />
        <Image className={c(css.lust, css.lustMd)} src={lustMd} alt='lust' />
        <Image className={c(css.lust, css.lustSm)} src={lustSm} alt='lust' />
    </footer>
}