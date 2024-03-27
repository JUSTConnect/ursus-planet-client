import { Text } from "@radix-ui/themes";

import More from "@/shared/ui/More";

import figure from './img/figure.svg'


export default function MissionPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Mission</More.Heading>
            <Text as="p">
                Our team strives to popularize the creation of new Web3 projects, helping with their fundamental challenges and motivating them to develop to their full potential.
            </Text>
            <Text as="p">
                We ready to provide convenient and necessary tools gathered in one place, demonstrate a clear growth model for projects through community involvement, and allow the community to earn from the project&apos;s growth process.</Text>
            <Text/>
        </More.Content>
    </More.Grid>
}