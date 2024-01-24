import { AxiosResponse } from "axios";
import { useBaseQuery, useBaseMutation } from "@/hooks/react-query";

interface ISocials {
    github: string|null,
    telegram: string|null,
    discord: string|null,
    x: string|null
} 


export function useSocials(){
    return useBaseQuery<ISocials>({
        keys: ['socials'],
        url: 'socials/'
    })
}

export function useSocialsDelete() {
    return useBaseMutation<unknown, AxiosResponse>({
        url: `socials/authorize/`,
        method: 'delete'
    })
}


export function useAuth() {
    return useBaseMutation({
        url: 'socials/authorize/',
        extraConfig: {
            validateStatus: (status: number) => {
                return status !== 403
            }
        }
    })
}
