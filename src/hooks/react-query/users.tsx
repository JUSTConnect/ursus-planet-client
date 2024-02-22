'use client'

import { useBaseQuery, useBaseMutation, type ListResponse } from "@/hooks/react-query"


interface IUser {
    id: number
    last_login: string
    is_superuser: boolean
    is_staff: boolean
    is_active: boolean
    date_joined: string
    username: string
    email: string
    password: string
    avatar: string
    referrer: string,
    referral_quote: number
    cabinet_notifications_email: boolean
    cabinet_notifications_account: boolean
    cabinet_notifications_frequency: 'string'
    project_notifications_email: boolean
    project_notifications_account: boolean
    project_notifications_frequency: 'string'
    groups: any[]
    user_permissions: any[]
    points: number
    color1: string
    color2: string
    color3: string
    color4: string
    color5: string
}


export function useUsersSelf() {
    return useBaseQuery<IUser>({
        keys: ['users-self'],
        url: 'users/me/'
    })
}


export function useUserSelfReferrals() {
    return useBaseQuery<ListResponse<{username: string, wallets: string[], referral_count: number}>>({
        keys: ['users-self-referrals'],
        url: 'users/referrals/'
    })
}


export function useUserSelfSetReferrer() {
    return useBaseMutation<{username: string}, {success: 'ok'}>({
        url: 'users/referrer/set/',
        method: 'post'
    })
}


export function useUserSelfSetReferrerCookie() {
    return useBaseMutation({
        url: 'users/referrer/set/cookie/',
        method: 'post'
    })
}


export function useUsersSelfUpdate() {
    return useBaseMutation({
        keys: [],
        url: 'users/me/',
        method: 'patch',
        extraConfig: {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    })
}

export function useEmailChange() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-change/',
    })
}

export function useEmailVerify() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-verify/'
    })
}