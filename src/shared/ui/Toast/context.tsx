'use client'
import { createContext, useContext, useState } from "react"
import Buffer from './Buffer'

import IMessage from './Message.props'
import IToastContext from './context.interface'



const ToastContext = createContext<IToastContext>({
    messages: [],
    fire: () => {}
})


export function ToastProvider({children}: {children: React.ReactNode}) {

    const [messages, setMessages] = useState<IMessage[]>([])

    const fire = (message: Omit<IMessage, 'id'>) => {
        setMessages([
            ...messages,
            message
        ])

    }

    return <ToastContext.Provider value={{
        messages,
        fire
    }}>
        {children}
        <Buffer messages={messages}></Buffer>
    </ToastContext.Provider>
}


export function useToast() {
    return useContext(ToastContext)
}