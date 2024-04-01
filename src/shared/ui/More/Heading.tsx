import { Heading as HeadingBase } from "@radix-ui/themes";


export default function Heading({children, ...props}: React.ComponentProps<typeof HeadingBase>)
{
    return <HeadingBase
        align='center'
        size={{
            initial: '8',
            sm: '9'
        }}
        mb={{
            sm: '5'
        }}
        {...props}
    >
            {children}
    </HeadingBase>
}