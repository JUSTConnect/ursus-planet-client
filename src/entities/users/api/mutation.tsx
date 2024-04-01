import {
    useBaseMutation
} from '@/shared/api/index'


import {USER, USER_ME} from './keys'


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
    }, [USER, USER_ME])
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
    }, [USER, USER_ME])
}