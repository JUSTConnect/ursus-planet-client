import { redirect } from "next/navigation";

import { useEffect } from "react";
import { Axios, AxiosError } from "axios";

import { useUsersSelf } from "@/hooks/react-query/users";


export default async function useAuthRequired() {
    const {error} = useUsersSelf()

    useEffect(() => {
        (error as AxiosError)?.response?.status === 401 && redirect('/')
        console.log(error)
    }, [error])

}