import { FaGithubAlt } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

import More from "@/shared/ui/More";
import Tabs from "@/shared/ui/Tabs";

export default function DocsLayout({children}: {children: React.ReactNode}) {
    return <More.Wrapper>
        <More.Tabs.Container bgDrop>
            <Tabs.Button href="/more/docs/gitbook"><FaGithubAlt/>Gitbook</Tabs.Button>
            <Tabs.Button href="/more/docs"><IoDocument/>Documents</Tabs.Button>
        </More.Tabs.Container>
        <More.Container>
            {children}
        </More.Container>
    </More.Wrapper>
}