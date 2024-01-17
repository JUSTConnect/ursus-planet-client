import { useBaseMutation } from "@/hooks/react-query";


interface AuthData {
    address: string
    chain_id?: string
}


export function useAuth() {
    return useBaseMutation<AuthData, unknown>(
        ['auth'],
        'web3auth/login/'
    )
}