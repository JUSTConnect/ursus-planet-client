import Dropdown from '@/shared/ui/Dropdown'

import {SelectProvider} from './context'


interface IRoot extends
    React.ComponentProps<typeof SelectProvider>,
    Omit<React.ComponentProps<typeof Dropdown.Root>, 'defaultValue'>
{}


export default function Root({children, defaultValue, ...props}: IRoot) {
    return <Dropdown.Root {...props}>
        <SelectProvider defaultValue={defaultValue}>
            {children}
        </SelectProvider>
    </Dropdown.Root> 
}