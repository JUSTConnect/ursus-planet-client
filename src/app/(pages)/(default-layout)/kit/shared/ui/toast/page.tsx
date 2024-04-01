'use client'
import Container from "@/shared/ui/Container"
import Button from "@/shared/ui/Button"

import { useToast } from "@/shared/ui/Toast"



export default function ToastKit() {
    const {fire} = useToast()

    return <Container>
        <Button onClick={() => fire({text: 'Profile successfully updated!'})}>
            fire primary (default)
        </Button>
        <Button onClick={() => fire({text: 'Account you are requesting for was taken.', type: 'error'})}>
            fire alert
        </Button>
        <Button onClick={() => fire({text: 'Your payment was procceed successfully!', type: 'success'})}>
            fire success
        </Button>
    </Container>
}