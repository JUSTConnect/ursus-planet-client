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
}


export function SelectProvider({placeholder, ...props}: ISelectProvider) {
    const [value, setValue] = useState<IItem|undefined>(props.defaultValue)

    return <SelectContext.Provider value={{value, setValue, placeholder}}>
        {props.children}
    </SelectContext.Provider>
}


export function useSelect() {
    return useContext(SelectContext)
}