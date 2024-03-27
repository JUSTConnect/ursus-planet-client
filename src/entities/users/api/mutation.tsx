import {
    useBaseMutation
} from '@/shared/api/index'


import {USER_ME} from './keys'


export function useMeUpdate() {
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


export function useMeEmailChange() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-change/'
    })
}


export function useMeEmailVerify() {
    return useBaseMutation({
        keys: [],
        url: 'users/email-verify/'
    }, USER_ME)
}