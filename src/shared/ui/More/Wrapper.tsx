import { Box } from "@radix-ui/themes";


export default function Wrapper({children, ...props}: React.ComponentProps<typeof Box>)
{
    return <Box {...props} my='5'>
        {children}
    </Box>
}