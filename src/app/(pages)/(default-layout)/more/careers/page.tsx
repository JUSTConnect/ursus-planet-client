import { Text, Flex, Link } from "@radix-ui/themes";
import { FiArrowUpRight } from "react-icons/fi";

import More from "@/shared/ui/More";
import Button from "@/shared/ui/Button";

import css from './page.module.scss'
import figure from './img/figure.svg'


export default function CareersPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Carrers</More.Heading>
            <Text as="p" mb='5'>
                in this section all open vacancies of the Ursas Planet platform are posted, as well as open vacancies of other projects. To post a vacancy, fill out the form.
            </Text>
            <Flex justify='center'>
                <Link href="https://forms.gle/XUk43377cy1Ck5sXA">
                    <Button wideWidth size="lg" color="primary" className={css.button}>
                        JoB Posting
                        <FiArrowUpRight/>
                    </Button>
                </Link>
            </Flex>
        </More.Content>
    </More.Grid>
}