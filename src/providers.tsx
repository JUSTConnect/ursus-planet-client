'use client'

import { Provider } from "react-redux";

import {store} from './store' 


export default function Providers(props: React.HTMLAttributes<HTMLDivElement>) {
    return <Provider store={store}>
        {props.children}
    </Provider>
}