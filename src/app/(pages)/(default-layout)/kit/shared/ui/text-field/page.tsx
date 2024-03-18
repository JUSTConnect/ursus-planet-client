'use client'

import {
    Flex,
    ScrollArea,
    Heading,
} from '@radix-ui/themes';


import { CheckCircledIcon } from '@radix-ui/react-icons';

import TextField, {TextFieldSize} from '@/shared/ui/TextField';
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


const sizes: TextFieldSize[] = [
    'sm',
    'md',
    'lg'
]


export default function Kit() {

    return (
        <>
            <Container>
                <Heading mb='5'>Sizes</Heading>
                <ScrollArea>
                    <Flex
                        className={css.flex}
                        align='start'
                        gap='3'
                        mb='3'
                    >
                        {
                            sizes.map((size, index) =>
                                <TextField.Input
                                    key={index}
                                    size={size}
                                    placeholder='Some placeholder'
                                />
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>With slot</Heading>
                <ScrollArea>
                    <Flex
                        className={css.flex}
                        align='start'
                        gap='3'
                        mb='3'
                    >
                            {
                                sizes.map((size, index)=>
                                    <TextField.Root key={index}>
                                        <TextField.Slot><CheckCircledIcon color='green'/></TextField.Slot>
                                        <TextField.Input size={size} placeholder='Some placeholder'/>
                                    </TextField.Root>
                                )
                            }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Has value</Heading>
                <ScrollArea>
                    <Flex
                        className={css.flex}
                        align='start'
                        gap='3'
                        mb='3'
                    >
                        {
                            sizes.map((size, index)=>
                                <TextField.Root key={index}>
                                    <TextField.Slot><CheckCircledIcon color='green'/></TextField.Slot>
                                    <TextField.Input
                                        size={size}
                                        placeholder='Some placeholder'
                                        value='Readonly value'
                                    />
                                </TextField.Root>
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Readonly</Heading>
                <ScrollArea>
                    <Flex
                        className={css.flex}
                        align='start'
                        gap='3'
                        mb='3'
                    >
                        {
                            sizes.map((size, index)=>
                                <TextField.Root key={index}>
                                    <TextField.Slot><CheckCircledIcon color='green'/></TextField.Slot>
                                    <TextField.Input
                                        readOnly
                                        size={size}
                                        placeholder='Some placeholder'
                                        value='Readonly value'
                                    />
                                </TextField.Root>
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
        </>
    )
}