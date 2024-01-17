'use client'

import { useBaseQuery } from "@/hooks/react-query"


export function useUsersSelf() {
    return useBaseQuery(
        ['users-self'],
        'users/me/'
    )
}