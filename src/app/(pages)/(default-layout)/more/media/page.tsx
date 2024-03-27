import { Grid } from "@radix-ui/themes";

import Container from "@/shared/ui/Container";

import media from './media'
import CardMedia from './CardMedia'

import css from './page.module.scss'


export default function MediaPage() {
    return <Container>
        <Grid
            className={css.grid}
            columns={{
                xs: '2',
                md: '3'
            }}
            gap={{
                initial: '2',
                md: '3',
                lg: '5'
            }}
        >
            {
                media.map((item, index) =>
                    <CardMedia key={index} {...item}/>
                )
            }
        </Grid>
    </Container> 
}