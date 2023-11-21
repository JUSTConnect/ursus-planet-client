import Image from 'next/image'

import css from './index.module.scss'
import tabsCss from '../tabs.module.scss'
import iconAvatar from './icons/avatar.svg'
import iconProfile from './icons/profile.svg'
import iconInfo from './icons/info.svg'
import iconEmailOk from './icons/email-ok.svg.svg'

import Avatar from "@/components/Avatar"
import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import Container from "@/components/core/Container"
import Button from "@/components/core/Button"
import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'
import { Input } from '@/components/core/Input'
import Checkbox from '@/components/core/Checkbox'
import Box from '@/components/core/Box'


export default function TabProfile() {
    return <Container className={tabsCss.container}>
        <div className={tabsCss.innerNav}>
            <Stack fullWidth>
                <CardHead className={tabsCss.innerNavTab}>
                    <div className={tabsCss.innerNavText}>
                        <Image src={iconAvatar} alt='icon' />
                        Avatar
                    </div>
                </CardHead>
                <CardHead className={[tabsCss.innerNavTab, tabsCss.innerNavTabActive].join(' ')}>
                    <div className={tabsCss.innerNavText}>
                        <Image src={iconAvatar} alt='icon' />
                        Avatar
                    </div>
                </CardHead>
            </Stack>
        </div>
        <div className={tabsCss.cards}>
            <Card className={tabsCss.card}>
                <div>
                    <CardHead>
                        <div className={tabsCss.cardHead}>
                            <Image src={iconAvatar} alt='icon' />
                            Avatar
                        </div>
                    </CardHead>
                    <CardBody className={tabsCss.cardBody}>
                        <Typography variant='p'>
                            Profile Image
                        </Typography>
                        <Stack>
                            <div>
                                <Avatar className={css.avatar} />
                            </div>
                            <div>
                                <div className={css.avatarRecommend}>
                                    <Image src={iconInfo} alt='icon' />
                                    recommend an image of at least 300x300. Gift work too. Max 5 mb.
                                </div>
                                <br />
                                <Stack>
                                    <Button size='sm' color='gray'>upload from gallery</Button>
                                    <Button size='sm' color='gray'>NFT wallet</Button>
                                </Stack>
                            </div>
                        </Stack>
                    </CardBody>
                </div>
                <CardFooter className={tabsCss.cardFooter}>
                    <Button color='gray' className={css.buttonSave}>Save</Button>
                </CardFooter>
            </Card>
            <Card className={tabsCss.card}>
                <div>
                    <CardHead>
                        <div className={tabsCss.cardHead}>
                            <Image src={iconProfile} alt='icon' />
                            Profile
                        </div>
                    </CardHead>
                    <CardBody className={tabsCss.cardBody}>
                        <Box mb={1}>
                            <Typography variant='p'>
                                Username
                            </Typography>
                            <Box mb={1}>
                                <Stack fullWidth className={css.stackInputCheckbox}>
                                    <Checkbox />
                                    <Input
                                        fullWidth
                                        defaultValue={'Stiven38324234'}
                                    />
                                </Stack>
                            </Box>
                            <Stack fullWidth className={css.stackInputCheckbox}>
                                <Checkbox />
                                <Box className={css.formControlWalletName}>
                                    <Typography
                                        color='gray'
                                        variant='p'
                                    >
                                        Wallet name
                                    </Typography>
                                    <Stack className={css.formControlWalletNameStack}>
                                        <Button
                                            size='sm'
                                            color='gray'
                                            iconStart={<Image src={iconEmailOk} alt='icon' />}
                                        >
                                            Stiven38324
                                        </Button>
                                        <Button
                                            size='sm'
                                            color='gray'
                                        >
                                            Stiven38</Button>
                                        <Button
                                            size='sm'
                                            color='gray'
                                        >
                                            Stiven334</Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                        <Typography variant='p'>
                            Email
                        </Typography>
                        <div className={css.inputEmailContainer}>
                            <Input
                                fullWidth
                                defaultValue={'Stiven38324234@gmail.com'}
                                className={css.inputEmail}
                                iconStart={
                                    <Image src={iconEmailOk} alt='icon' className={css.inputEmailIconOk} />
                                }
                            />
                        </div>
                    </CardBody>
                </div>
                <CardFooter className={tabsCss.cardFooter}>
                    <Button color='gray' className={css.buttonSave}>Save</Button>
                </CardFooter>
            </Card>
        </div>
    </Container>
}