import { Text } from "@radix-ui/themes";

import More from "@/shared/ui/More";

import css from './page.module.scss'
import figure from './img/figure.svg'


export default function SolutionsPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Solutions</More.Heading>
            <Text as="p">
                We have tested a model that helps grow projects and developed tools that assist projects in realizing their potential and attracting followers.
            </Text>
            <Text as="p">
                This includes:
            </Text>
            <Text>
                <ul className={css.list}>
                    <li>
                        Gaming raffles with a unique mechanics of selling spots in an ongoing giveaway
                    </li>
                    <li>
                        Earning project tokens by participating in raffles
                    </li>
                    <li>
                        Task, quest, and quiz creation system
                    </li>
                    <li>
                        Launchpad platform
                    </li>
                    <li>
                        White list distribution system 
                    </li>
                    <li>
                        Promotion auctions
                    </li>
                    <li>
                        Raids system
                    </li>
                </ul>
            </Text>
        </More.Content>
    </More.Grid>
}