'use client'

import { useState } from "react";

import Container from "@/components/core/Container";
import Card, {CardBody} from "@/components/core/Card";
import Modal from "@/components/core/Modal";
import Button from "@/components/core/Button";
import Box from "@/components/core/Box";
import { Input } from "@/components/core/Input";
import Typography from "@/components/core/Typography";


export default function ModalKit() {
    const [active, setActive] = useState(false)

    return <Container>
        <Button onClick={ () => setActive(true) } animated>Show modal</Button>

        <Modal active={active} setActive={setActive} style={{maxWidth: '400px'}}>
            <Card>
                <CardBody>
                    <Box mb={2}>
                        <Typography variant="h3" center>Example modal</Typography>
                    </Box>
                    <Box mb={1}>
                        <Input
                            size="md"
                            fullWidth
                            placeholder="Enter your something"
                        />
                    </Box>
                    <Box>
                        <Button size="lg" color="gray" fullWidth animated>Submit</Button>
                    </Box>
                </CardBody>
            </Card>
        </Modal>
    </Container>
}