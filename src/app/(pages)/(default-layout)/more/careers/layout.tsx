import { BsFillBarChartFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

import More from "@/shared/ui/More";
import Tabs from "@/shared/ui/Tabs";


export default function CareersLayout({children}: {children: React.ReactNode}) {
    return <More.Wrapper>
        <More.Tabs.Container>
            <Tabs.Button href="/more/careers"><BsFillBarChartFill/>Careers</Tabs.Button>
            <Tabs.Button href="/more/careers/vacancies"><FaBriefcase/>Vacancies</Tabs.Button>
        </More.Tabs.Container>
        <More.Container>
            {children}
        </More.Container>
    </More.Wrapper>
}