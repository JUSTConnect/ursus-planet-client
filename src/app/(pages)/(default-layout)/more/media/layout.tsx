import { Box } from "@radix-ui/themes";
import { IoShareSocial } from "react-icons/io5";

import Tabs from "@/shared/ui/Tabs";

import css from './layout.module.scss'

export default function MediaLayout({children}: {children: React.ReactNode}) {
    return <Box my='5'>
        <Tabs.Container bgDrop>
            <Tabs.Button href="/more/media"><IoShareSocial/>Media</Tabs.Button>
        </Tabs.Container>
        <Box className={css.content}>
            {children}
        </Box>
    </Box>
}