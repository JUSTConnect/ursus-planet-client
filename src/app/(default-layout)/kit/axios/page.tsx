'use client'

import { useUsersSelf } from "@/hooks/react-query/users"

export default function AxiosKit() {
    const {data, error} = useUsersSelf()

    return <>
        {error && console.log(error)}
    </>
}