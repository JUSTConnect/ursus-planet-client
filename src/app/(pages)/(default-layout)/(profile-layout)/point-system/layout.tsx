import Tabs from "@/shared/ui/Tabs"

import { IoSend } from "react-icons/io5"
import { FaLink } from "react-icons/fa"


export default function PointSystemLayout({children}: {children: React.ReactNode}) {
    return <>
        <Tabs.Container bgDrop>
            <Tabs.Button href="/point-system/tasks">
                <IoSend/>
                Tasks
            </Tabs.Button>
            <Tabs.Button href="/point-system/referral">
                <FaLink/>
                Referral
            </Tabs.Button>
        </Tabs.Container>
        {children}
    </>
}