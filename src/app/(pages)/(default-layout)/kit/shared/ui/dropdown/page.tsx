'use client'
import { MdSupport } from "react-icons/md";

import Button from '@/shared/ui/Button';
import Container from "@/shared/ui/Container"
import Dropdown from '@/shared/ui/Dropdown';



export default function Kit() {

    return (
        <>
            <Container>
                <Dropdown.Root>
                    <Dropdown.Trigger>
                        <Button>
                            Dropdown custom
                        </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                        <Dropdown.Item><MdSupport/>Item a</Dropdown.Item>
                        <Dropdown.Item>Item b<MdSupport/></Dropdown.Item>
                        <Dropdown.Item>Item c</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Root>
            </Container>
        </>
    )
}