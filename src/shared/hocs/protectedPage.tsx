'use client'
import { useDispatch } from "react-redux";

import { useMe } from "@/entities/users/api";
import { redirect } from "next/navigation";
import { setModalWalletConnect } from "@/features/modal/modalSlice";


export default function protectedPage<Props extends object>(WrappedComponent: React.ComponentType<Props>) {

    const Component = (props: Props) => {
        const dispatch = useDispatch()
        const {error} = useMe()

        if (error?.response?.status === 401) {
            dispatch(setModalWalletConnect(true))
            return redirect('/')
        }

        return <WrappedComponent {...props} />;
    };

    return Component
}