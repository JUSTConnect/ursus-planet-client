import { CheckIcon } from "@radix-ui/react-icons";
import c from "classnames";

import Dropdown from "@/shared/ui/Dropdown";
import { useDropdown } from "@/shared/ui/Dropdown/context";

import {useSelect} from './context'
import IItem from './Item.props'

import css from './index.module.scss'


interface IItemProps extends IItem, Omit<React.ComponentProps<typeof Dropdown.Item>, 'onClick'|'children'>
{

}


export default function Item({value, className, name, ...props}: IItemProps) {
    const {value: currentValue, setValue} = useSelect()
    const {setActive} = useDropdown()

    const cn = c(
        className,
        css.item,
        currentValue?.value === value && css.itemActive
    )

    return <Dropdown.Item
        {...props}
        onClick={ () => {setValue && setValue({name, value}); setActive(false)} }
        className={cn}
    >
        {name}
        {
            currentValue?.value === value &&
                <CheckIcon/>
        }
    </Dropdown.Item>
}