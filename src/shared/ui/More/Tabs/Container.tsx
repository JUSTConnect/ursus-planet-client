import Tabs from "@/shared/ui/Tabs";


export default function Container({children, ...props}: React.ComponentProps<typeof Tabs.Container>)
{
    return <Tabs.Container
        bgDrop
        bgDropHeight={250}
        {...props}
    >
        {children}
    </Tabs.Container>
}