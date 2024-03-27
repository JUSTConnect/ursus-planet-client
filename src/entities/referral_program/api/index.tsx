import { USER_ME } from "@/entities/users/api/keys";
import { useBaseMutation, useBaseQuery, ListResponse } from "@/shared/api";


export function useMeClaim() {
    return useBaseMutation({
        url: 'referral-program/claim/'
    }, USER_ME)
}


export function useMeSetReferrer() {
    return useBaseMutation<{ username: string }, { success: 'ok' }>({
        url: 'referral-program/me/set-referrer/',
        method: 'post'
    }, USER_ME)
}


export function useMeSetReferrerCookie() {
    return useBaseMutation({
        url: 'referral-program/me/set-referrer-cookie/',
        method: 'post'
    })
}


export function useReferralProgramLeaderboard() {
    return useBaseQuery<ListResponse<{username: string, wallets: string[], referral_count: number}>>({
        url: 'referral-program/leaderboard/',
        keys: ['referral-program', 'leaderboard'],
    })
}
