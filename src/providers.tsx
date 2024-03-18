'use client'

import { Provider } from "react-redux"
import { QueryClientProvider } from "@tanstack/react-query"
import { MetaMaskContextProvider } from "@/entities/web3/hooks/useMetamask"
import { Theme } from "@radix-ui/themes"
import { queryClient } from "@/shared/api"
import { ToastProvider } from "@/shared/ui/Toast"


import { store } from './store'



export default function Providers(props: React.HTMLAttributes<HTMLDivElement>) {

    return <Theme appearance="dark">
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MetaMaskContextProvider>
                    <ToastProvider>
                        {props.children}
                    </ToastProvider>
                </MetaMaskContextProvider>
            </QueryClientProvider>
        </Provider>
    </Theme> 
}