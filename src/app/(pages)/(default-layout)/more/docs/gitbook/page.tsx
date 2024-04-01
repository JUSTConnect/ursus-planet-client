import { Text, Grid, Link } from "@radix-ui/themes";
import { FiArrowUpRight } from "react-icons/fi";

import More from "@/shared/ui/More";
import Button from "@/shared/ui/Button";

import figure from './img/figure.svg'


export default function GitbookPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Gitbook Ursas Planet</More.Heading>
            <Text as="p" mb='5'>
                This page contains documentation that allows you to fully get acquainted with the project, as well as study.
            </Text>
            <Grid
                columns={{
                    sm: '2'
                }}
                gapX='4'
                gapY='2'
            >
                <Link target="_blank" href="https://docs-project.ursasplanet.com/">
                    <Button
                        fullWidth
                        color="primary"
                        size="lg"
                    >
                        Platform DOCS
                        <FiArrowUpRight/>
                    </Button>
                </Link>
                <Link target="_blank" href="https://docs-platform.ursasplanet.com/">
                    <Button
                        fullWidth
                        color="primary"
                        size="lg"
                    >
                        Project DOCS
                        <FiArrowUpRight/>
                    </Button>
                </Link>
            </Grid>
        </More.Content>
    </More.Grid>
}