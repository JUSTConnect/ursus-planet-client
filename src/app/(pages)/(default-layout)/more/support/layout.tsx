import { IoHelpBuoy } from "react-icons/io5";

import More from "@/shared/ui/More";
import Tabs from "@/shared/ui/Tabs";


export default function SupportLayout({children}: {children: React.ReactNode}) {
    return <More.Wrapper>
        <More.Tabs.Container>
            <Tabs.Button href="/more/support"><IoHelpBuoy/>Support</Tabs.Button>
        </More.Tabs.Container>
        <More.Container>
            {children}
        </More.Container>
    </More.Wrapper>
}