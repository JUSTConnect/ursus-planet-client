import Button from "@/components/core/Button"
import Container from "@/components/core/Container"
import Card, {CardHead, CardFooter, CardBody} from "@/components/core/Card"

export default function CardKit() {
    return <Container>
        <Card>
            <CardHead>Profile</CardHead>
            <CardBody>
                <Button color="gray">helo</Button>
            </CardBody>
            <CardFooter>
                <Button size="sm" color="gray">helo</Button>
            </CardFooter>
        </Card>
    </Container> 
}