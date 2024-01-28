'use client'

import { useBaseQuery, useBaseMutation } from "@/hooks/react-query"


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
    cabinet_notifications_email: boolean
    cabinet_notifications_account: boolean
    cabinet_notifications_frequency: 'string'
    project_notifications_email: boolean
    project_notifications_account: boolean
    project_notifications_frequency: 'string'
    groups: any[]
    user_permissions: any[]
}


export function useUsersSelf() {
    return useBaseQuery<IUser>({
        keys: ['users-self'],
        url: 'users/me/'
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