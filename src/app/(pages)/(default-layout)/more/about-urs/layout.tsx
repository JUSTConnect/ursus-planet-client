import { VscTarget } from "react-icons/vsc";
import { RiAlertFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

import More from "@/shared/ui/More";
import Tabs from "@/shared/ui/Tabs";


export default function BrandKitLayout({children}: {children: React.ReactNode}) {
    return <More.Wrapper>
        <More.Tabs.Container>
            <Tabs.Button href="/more/about-urs/mission"><VscTarget/>Mission</Tabs.Button>
            <Tabs.Button href="/more/about-urs/problems"><RiAlertFill/>Problems</Tabs.Button>
            <Tabs.Button href="/more/about-urs/solutions"><FaLightbulb/>Solutions</Tabs.Button>
        </More.Tabs.Container>
        <More.Container>
            {children}
        </More.Container>
    </More.Wrapper>
}