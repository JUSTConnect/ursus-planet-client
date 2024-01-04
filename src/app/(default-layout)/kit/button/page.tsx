'use client'

import Image from 'next/image';

import iconPng from './icons/png.png'
import IconSvg from './icons/Svg'

import Box from '@/components/core/Box';
import Button, { ButtonSize, ButtonColor, ButtonVariant } from '@/components/core/Button';
import ButtonIcon from '@/components/core/Button/ButtonIcon';
import Container from '@/components/core/Container';
import Scroller from '@/components/core/Scroller';
import Stack from '@/components/core/Stack';
import Typography from '@/components/core/Typography';


const buttonSizes: ButtonSize[] = [
    'sm',
    'md',
    'lg'
]

const buttonColors: ButtonColor[] = [
    "primary",
    "dark",
    "gray",
    "success",
    "warning",
    "error",
]

const buttonVariants: ButtonVariant[] = [
    'regular',
    'blank'
]

export default function Kit() {

    return (
        <Container>
            {buttonSizes.map(size =>
                <Box key={size} mb={1} mt={1}>
                    <Typography variant='h3'>{size.toUpperCase()}-sized buttons</Typography>
                    <Scroller>
                        <Stack maxContent>
                            {buttonColors.map(color =>
                                <Box key={color}>
                                    <Typography variant='p'>{color}</Typography>
                                    <Button size={size} color={color}>Hello world</Button>
                                </Box>
                            )}
                            <Box>
                                <Typography variant='p'>blank</Typography>
                                <Button size={size} variant='blank'>Hello world</Button>
                            </Box>
                        </Stack>
                    </Scroller>
                </Box>
            )}
            <Box mb={2} mt={2}>
                <Box mb={1} mt={1}>
                    <Typography variant='h3'>With icon (img)</Typography>
                    <Scroller>
                        <Stack maxContent>
                            {buttonSizes.map(size =>
                                <Box key={size}>
                                    <Typography variant='p'>{size}</Typography>
                                    <Button
                                        size={size}
                                        iconStart={
                                            <Image src={iconPng} alt='icon'/>
                                        }
                                    >
                                        Hello world
                                    </Button>
                                    <ButtonIcon size={size}>
                                        <Image src={iconPng} alt='icon'/>
                                    </ButtonIcon>
                                </Box>
                            )}
                            <Box>
                                <Typography variant='p'>blank</Typography>
                                <Button
                                    variant='blank'
                                    iconStart={
                                        <Image src={iconPng} alt='icon'/>
                                    }
                                >
                                    Hello world
                                </Button>
                            </Box>
                        </Stack>
                    </Scroller>
                </Box>
                <Box mb={1} mt={1}>
                    <Typography variant='h3'>With icon (svg)</Typography>
                    <Scroller>
                        <Stack maxContent>
                            {buttonSizes.map(size =>
                                <Box key={size}>
                                    <Typography variant='p'>{size}</Typography>
                                    <Button
                                        size={size}
                                        iconStart={<IconSvg/>}
                                    >
                                        Hello world
                                    </Button>
                                </Box>
                            )}
                            <Box>
                                <Typography variant='p'>blank</Typography>
                                <Button
                                    variant='blank'
                                    iconStart={<IconSvg/>}
                                >
                                    Hello world
                                </Button>
                            </Box>
                        </Stack>
                    </Scroller>
                </Box>
                <Box mb={1} mt={1}>
                    <Typography variant='h3'>Animated</Typography>
                    <Scroller>
                        <Stack maxContent>
                            {buttonSizes.map(size =>
                                <Box key={size}>
                                    <Typography variant='p'>{size}</Typography>
                                    <Button animated size={size} >Hello world</Button>
                                </Box>
                            )}
                            <Box>
                                <Typography variant='p'>blank</Typography>
                                <Button animated variant='blank'>Hello world</Button>
                            </Box>
                        </Stack>
                    </Scroller>
                </Box>
                <Box mb={1} mt={1}>
                    <Typography variant='h3'>Disabled</Typography>
                    <Scroller>
                        <Stack maxContent>
                            {buttonSizes.map(size =>
                                <Box key={size}>
                                    <Typography variant='p'>{size}</Typography>
                                    <Button disabled size={size} >Hello world</Button>
                                </Box>
                            )}
                            <Box>
                                <Typography variant='p'>blank</Typography>
                                <Button disabled variant='blank'>Hello world</Button>
                            </Box>
                        </Stack>
                    </Scroller>
                </Box>
            </Box>
        </Container>
    )
}