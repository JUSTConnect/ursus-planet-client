'use client'
import { Box } from "@radix-ui/themes";

import { useCopy } from "./context";


export default function Trigger({children}: {children: React.ReactNode}) {
    const {copy} = useCopy()

    return <Box onClick={ () => copy() } asChild>
        {children}
    </Box>
}