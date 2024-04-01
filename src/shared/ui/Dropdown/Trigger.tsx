import { Box } from '@radix-ui/themes'

import {useDropdown} from './context'


interface ITrigger
{
    children: React.ReactNode
}


export default function Trigger(props: ITrigger) {
    
    const {active, setActive} = useDropdown()


    return <Box onClick={ () => setActive(!active) }>
        {props.children}
    </Box>
}