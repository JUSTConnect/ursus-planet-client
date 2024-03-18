import { IUser } from '@/entities/user/model'
import {
    ListResponse,
    useBaseQuery,
} from '@/shared/api/index'


import {USER_ME, USER_ME_REFERRALS} from './keys'


export function useUserSelf() {
    return useBaseQuery<IUser>({
        keys: USER_ME,
        url: 'users/me/'
    })
}


export function useReferrals() {
    return useBaseQuery<ListResponse<{username: string, wallets: string[], referral_count: number}>>({
        keys: USER_ME_REFERRALS,
        url: 'users/referrals/'
    })
}