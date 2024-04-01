import { Text } from "@radix-ui/themes";

import More from "@/shared/ui/More";

import figure from './img/figure.svg'


export default function ProblemsPage() {
    return <More.Grid>
        <More.Content>
            <More.Figure src={figure}/>
        </More.Content>
        <More.Content>
            <More.Heading>Problems</More.Heading>
            <Text as="p">
                With the increasing number of projects, there is a significant competition, which is natural for a growing market. Projects and communities have to seek new, efficient, and convenient ways of interaction. 
            </Text>
            <Text as="p">
                We identify the main problem in the limited number of platforms that help connect projects and communities. Another challenge lies in the difficulty for small projects to attract attention, and for new users to track the activity of such projects. 
            </Text>
            <Text as='p'>
                Ursas Planet aims to address these identified issues.
            </Text>
        </More.Content>
    </More.Grid>
}