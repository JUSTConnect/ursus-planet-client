'use client'
import { createContext, useState, useContext } from "react";

import { useToast } from "@/shared/ui/Toast";

import {ICopyContext, ICopyProvider} from './context.interface'


const CopyContext = createContext<ICopyContext>({copy: () => {}, copyActive: false})


export function CopyProvider({children, text, success_message}: ICopyProvider) {
    const {fire} = useToast()

    const [active, setActive] = useState(false)

    const copy = () => {
        if (!active) {
            setActive(true)
            setTimeout(() => {
                setActive(false)
            }, 2000)
            navigator.clipboard.writeText(text);
            fire({text: success_message||'Copied!'})
        }
    }

    return <CopyContext.Provider value={{copyActive: active, copy: copy}}>
        {children}
    </CopyContext.Provider>
}


export function useCopy() {
    return useContext(CopyContext) 
}