import {IUser} from '@/entities/users/model'
import {
    useBaseQuery,
} from '@/shared/api/index'


import {USER_ME} from './keys'


export function useMe() {
    return useBaseQuery<IUser>({
        keys: USER_ME,
        url: 'users/me/'
    })
}

