import * as RadixSelect from '@radix-ui/react-select'


export default function Trigger(props: React.HTMLAttributes<HTMLDivElement>) {
    return <RadixSelect.Trigger asChild>
        {props.children}
    </RadixSelect.Trigger> 
}