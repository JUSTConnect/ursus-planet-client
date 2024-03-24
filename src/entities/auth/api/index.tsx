import {useBaseMutation} from '@/shared/api/index'

import { AuthData } from '@/entities/auth/model'


export function useAuth() {
    return useBaseMutation<AuthData, unknown>({
        keys: ['auth'],
        url: 'web3auth/login/',
    })
}

export function useLogout() {
    return useBaseMutation({
        url: 'web3auth/logout/'
    })
}