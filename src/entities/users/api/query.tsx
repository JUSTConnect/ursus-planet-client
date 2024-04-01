import { AxiosError } from 'axios'
import {IUser} from '@/entities/users/model'
import { useQuery } from '@tanstack/react-query'
import {
    apiInstance
} from '@/shared/api/index'

import {USER, USER_ME} from './keys'


export function useMe() {
    return useQuery<IUser, AxiosError>({
        queryFn: async () => {
            const {data} = await apiInstance.get('users/me')
            return data
        },
        queryKey: [USER, USER_ME]
    })
}


// export function useMe() {
//     return useBaseQuery<IUser>({
//         keys: [USER, USER_ME],
//         url: 'users/me/'
//     })
// }

