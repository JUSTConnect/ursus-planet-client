import {useDropdown} from './context'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'


export default function Arrow() {
    const {active} = useDropdown()

    if (active) return <IoIosArrowUp/> 

    if (!active) return <IoIosArrowDown/> 
}