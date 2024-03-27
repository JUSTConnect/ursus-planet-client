import { Text, Grid, Link, Flex } from "@radix-ui/themes";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

import More from "@/shared/ui/More";
import Button from "@/shared/ui/Button";

import figure from './img/figure.svg'


export default function GitbookPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Need help?</More.Heading>
            <Text as="p" mb='5'>
                Use the forms to request collaboration or report a problem, also write us an email.
            </Text>
            <Grid
                columns={{
                    sm: '2'
                }}
                gapX='4'
                gapY='2'
            >
                <Button
                    fullWidth
                    color="primary"
                    size="lg"
                >
                    Collaboration
                    <FiArrowUpRight/>
                </Button>
                <Button
                    fullWidth
                    color="primary"
                    size="lg"
                >
                    Problem
                    <FiArrowUpRight/>
                </Button>
            </Grid>
            <Link size='4'>
                <Flex justify='center' align='center' mt='3' gap='3'>
                    <IoMail/>Write by email
                </Flex>
            </Link>
        </More.Content>
    </More.Grid>
}