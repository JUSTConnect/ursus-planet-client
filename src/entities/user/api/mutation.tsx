import {
    useBaseMutation
} from '@/shared/api/index'


import {USER_ME} from './keys'


export function useUserSelfSetReferrer() {
    return useBaseMutation<{ username: string }, { success: 'ok' }>({
        url: 'users/referrer/set/',
        method: 'post'
    }, USER_ME)
}


export function useUserSelfSetReferrerCookie() {
    return useBaseMutation({
        url: 'users/referrer/set/cookie/',
        method: 'post'
    })
}


export function useUserSelfUpdate() {
    return useBaseMutation({
        keys: [],
        url: 'users/me/',
        method: 'patch',
        extraConfig: {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    }, USER_ME)
}


export function useEmailChange() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-change/'
    })
}


export function useEmailVerify() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-verify/'
    }, USER_ME)
}