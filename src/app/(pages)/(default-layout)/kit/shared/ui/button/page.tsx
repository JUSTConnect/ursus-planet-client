'use client'

import {
    Flex,
    ScrollArea,
    Heading,
    Tooltip,
    Skeleton
} from '@radix-ui/themes';

import { PaperPlaneIcon } from '@radix-ui/react-icons';

import Container from "@/shared/ui/Container"
import Button, {ButtonSize, ButtonColor} from '@/shared/ui/Button';


const buttonSizes: ButtonSize[] = [
    'sm',
    'md',
    'lg'
]

const buttonColors: ButtonColor[] = [
    "white",
    "primary",
    "gray",
    "dark"
]


export default function Kit() {

    return (
        <>
            {
                buttonSizes.map((size, index) =>
                    <Container key={index}>
                        <Heading mb='5'>Size {size.toUpperCase()}</Heading>
                        <ScrollArea>
                            <Flex gap='2' mb='3'>
                                {
                                    buttonColors.map((color, index) =>
                                        <Button
                                            key={index}
                                            size={size}
                                            color={color}
                                        >
                                            Color {color.toUpperCase()}
                                        </Button>
                                    )
                                }
                            </Flex>
                        </ScrollArea>
                    </Container>
                )
            }
            <Container>
                <Heading mb='5'>With icon</Heading>
                <ScrollArea>
                    <Flex gap='2' mb='3'>
                        {
                            buttonSizes.map((size, index) =>
                                <Button
                                    key={index}
                                    size={size}
                                >
                                    <PaperPlaneIcon/>
                                    Size {size.toUpperCase()} with icon
                                </Button> 
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>With tooltip</Heading>
                <ScrollArea scrollbars='horizontal'>
                    <Flex gap='2' mb='3'>
                        {
                            buttonSizes.map((size, index) =>
                                <Tooltip
                                    key={index}
                                    style={{maxWidth: '200px'}}
                                    content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, officia ab et, vero ducimus tenetur magnam aliquam hic voluptates debitis aut nostrum odit eligendi reiciendis velit nisi, nipsum commodi neque.'>
                                    <Button size={size}>
                                        <PaperPlaneIcon/>
                                        Size {size.toUpperCase()} with icon
                                    </Button> 
                                </Tooltip>
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Skeleton</Heading>
                <ScrollArea scrollbars='horizontal'>
                    <Flex gap='2' mb='3'>
                        {
                            buttonSizes.map((size, index) =>
                                <Skeleton key={index}>
                                    <Button size={size}>
                                        <PaperPlaneIcon/>
                                        Size {size.toUpperCase()} with icon
                                    </Button> 
                                </Skeleton>
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Hover to white</Heading>
                <ScrollArea scrollbars='horizontal'>
                    <Flex gap='2' mb='3'>
                        {
                            buttonSizes.map((size, index) =>
                                <Button
                                    key={index}
                                    hoverToWhite size={size}
                                >
                                    <PaperPlaneIcon/>
                                    Size {size.toUpperCase()} with icon
                                </Button> 
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Icon</Heading>
                <ScrollArea scrollbars='horizontal'>
                    <Flex gap='2' mb='3'>
                        {
                            buttonSizes.map((size, index) =>
                                <Button
                                    key={index}
                                    size={size}
                                    hoverToWhite
                                    icon
                                >
                                    <PaperPlaneIcon/>
                                </Button> 
                            )
                        }
                    </Flex>
                </ScrollArea>
            </Container>
            <Container>
                <Heading mb='5'>Full width</Heading>
                <Button fullWidth>
                    <PaperPlaneIcon/>
                    Full width button
                </Button> 
            </Container>
        </>
    )
}