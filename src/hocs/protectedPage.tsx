import { useDispatch } from "react-redux";

import { useUsersSelf } from "@/hooks/react-query/users";
import { redirect } from "next/navigation";
import { setModalWalletConnect } from "@/features/modal/modalSlice";


export default function protectedPage<Props extends object>(WrappedComponent: React.ComponentType<Props>) {

    const Component = (props: Props) => {
        const dispatch = useDispatch()
        const {error} = useUsersSelf()

        if (error?.response?.status === 401) {
            dispatch(setModalWalletConnect(true))
            return redirect('/')
        }

        return <WrappedComponent {...props} />;
    };

    return Component
}