'use client'
import { useState } from "react";
import { createContext, useContext } from "react";

import IItem from './Item.props'


interface ISelectContext
{
    value?: IItem
    setValue?: (_?: IItem) => void
    placeholder?: string
}


const SelectContext = createContext<ISelectContext>({})


interface ISelectProvider
{
    children?: React.ReactNode
    defaultValue?: IItem
    placeholder?: string
    onValueChange?: (_?:string) => void
}


export function SelectProvider({placeholder, ...props}: ISelectProvider) {
    const [value, setValue] = useState<IItem|undefined>(props.defaultValue)

    const handleChange = (value?: IItem) => {
        props.onValueChange && props.onValueChange(value?.value)
        setValue(value)
    }

    return <SelectContext.Provider value={{value, setValue: handleChange, placeholder}}>
        {props.children}
    </SelectContext.Provider>
}


export function useSelect() {
    return useContext(SelectContext)
}