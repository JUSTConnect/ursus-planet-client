'use client'

import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MetaMaskContextProvider } from "@/hooks/useMetamask"

import { store } from './store'

const queryClient = new QueryClient()


export default function Providers(props: React.HTMLAttributes<HTMLDivElement>) {

    return <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <MetaMaskContextProvider>
                {props.children}
            </MetaMaskContextProvider>
        </QueryClientProvider>
    </Provider>
}