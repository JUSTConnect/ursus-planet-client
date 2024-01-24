import { useBaseMutation } from "@/hooks/react-query";


interface AuthData {
    address: string
    chain_id?: string
}


export function useAuth() {
    return useBaseMutation<AuthData, unknown>({
        keys: ['auth'],
        url: 'web3auth/login/',
    })
}

export function useLogout() {
    return useBaseMutation<null, {}>({
        url: 'web3auth/logout/'
    })
}