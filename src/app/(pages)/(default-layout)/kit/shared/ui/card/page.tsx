'use client'
import { Flex } from '@radix-ui/themes';
import { CheckCircledIcon } from '@radix-ui/react-icons';

import Button from '@/shared/ui/Button';
import TextField from '@/shared/ui/TextField';
import Card from '@/shared/ui/Card';
import Container from "@/shared/ui/Container"


import css from './index.module.scss'




export default function Kit() {

    return (
        <>
            <Container>
                <Card.Root className={css.card}>
                    <Card.Head>
                        <CheckCircledIcon/> Card head
                    </Card.Head>
                    <Card.Body>
                        <Flex direction='column' gap='4'>
                            <TextField.Input placeholder='Enter your email'/>
                            <Button fullWidth>SUBMIT</Button>
                        </Flex>
                    </Card.Body>
                </Card.Root>
            </Container>
        </>
    )
}