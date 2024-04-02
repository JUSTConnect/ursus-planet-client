import { Grid, Link } from "@radix-ui/themes";

import More from "@/shared/ui/More";

import figure from './img/figure.svg'


export default function GitbookPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Documents</More.Heading>
            <Grid
                columns={{
                    initial: '2',
                    sm: '3'
                }}
                gapX={{
                    initial: '6',
                    lg: '9'
                }}
                gapY='3'
            >
                <Link target="_blank" href="https://google.com/" color="sky">Name of document</Link>
                <Link target="_blank" href="https://google.com/" color="sky">Name of document</Link>
                <Link target="_blank" href="https://google.com/" color="sky">Name of document</Link>
                <Link target="_blank" href="https://google.com/" color="sky">Name of document</Link>
                <Link target="_blank" href="https://google.com/" color="sky">Name of document</Link>
            </Grid>
        </More.Content>
    </More.Grid>
}
