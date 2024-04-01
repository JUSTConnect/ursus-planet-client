import Dropdown from '@/shared/ui/Dropdown'

import {SelectProvider} from './context'


interface IRoot extends
    React.ComponentProps<typeof SelectProvider>,
    Omit<React.ComponentProps<typeof Dropdown.Root>, 'defaultValue'>
{
    onValueChange?: (_?: string) => void
}


export default function Root({children, defaultValue, onValueChange, ...props}: IRoot) {
    return <Dropdown.Root {...props}>
        <SelectProvider defaultValue={defaultValue} onValueChange={onValueChange}>
            {children}
        </SelectProvider>
    </Dropdown.Root> 
}