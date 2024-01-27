import { AxiosResponse } from "axios";
import { useBaseQuery, useBaseMutation } from "@/hooks/react-query";

interface ISocials {
    github: string|null,
    telegram: string|null,
    discord: string|null,
    x: string|null
} 


interface ISocialConfig {
    client_id: string,
    redirect_uri: string
}

interface ISocialsConfig {
    github: ISocialConfig,
    discord: ISocialConfig,
    x: ISocialConfig
}


export function useSocialConfig() {
    return useBaseQuery<ISocialsConfig>({
        keys: ['socials-config'],
        url: 'socials/config/'
    })
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

