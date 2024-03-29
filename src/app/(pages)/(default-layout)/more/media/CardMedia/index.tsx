import { StaticImageData } from "next/image";
import { Text, Flex, Link } from "@radix-ui/themes";

import Button from "@/shared/ui/Button";
import Figure from "@/shared/ui/Figure";
import Card from "@/shared/ui/Card";

import css from './index.module.scss'


interface ICardMedia
{
    title: string
    count_subscribers: number
    figure: StaticImageData
    link?: string
}


export default function CardMedia(props: ICardMedia)
{
    return <Card.Root>
        <Card.Body className={css.body}>
            <Flex direction='column' gap='3'>
                <Text
                    as="p"
                    size='8'
                    align={{
                        md: 'center'
                    }}
                    mb='5'
                >
                    {props.title}
                </Text>
                {/* <Text
                    as="p"
                    align={{
                        md: 'center'
                    }}
                    mb='5'
                >
                    {props.count_subscribers} subscribers
                </Text> */}
                <Figure
                    className={css.figure}
                    src={props.figure}
                />
            </Flex>
        </Card.Body>
        <Card.Bottom className={css.bottom}>
            <Link target="_blank" href={props.link||'#'}>
                <Button
                    className={css.button}
                    color={!!props.link ? 'primary' : 'gray'}
                    size='lg'
                    fullWidth
                    disabled={!props.link}
                >
                    SUBSCRIBE
                </Button>
            </Link>
        </Card.Bottom>
    </Card.Root>
}