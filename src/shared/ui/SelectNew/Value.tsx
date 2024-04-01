import {useSelect} from './context'


export default function Value() {
    const {value, placeholder} = useSelect()
    return value ? value.name : placeholder ? placeholder : 'Select value...'
}