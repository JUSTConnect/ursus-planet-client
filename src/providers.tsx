'use client'

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { MetaMaskProvider } from '@metamask/sdk-react';

import { store } from './store'


export default function Providers(props: React.HTMLAttributes<HTMLDivElement>) {
    // client window is used to avoid "window is not defined" error
    const [clientWindow, setClientWindow] = useState<Window|undefined>()

    useEffect(() => setClientWindow(window), [])

    return <Provider store={store}>
        <MetaMaskProvider debug={false} sdkOptions={{
            dappMetadata: {
                name: "Ursas Planet",
                url: clientWindow?.location.host,
            }
        }}>
            {props.children}
        </MetaMaskProvider>
    </Provider>
}