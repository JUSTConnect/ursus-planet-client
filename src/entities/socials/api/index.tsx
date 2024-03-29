import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useBaseQuery, useBaseMutation } from "@/shared/api";
import { apiInstance, queryClient } from "@/shared/api";
import { ISocialsConfig, ISocials } from "@/entities/socials/model";

import {SOCIALS_CONFIG, SOCIALS_MY} from './keys'


export function useSocialConfig() {
    return useBaseQuery<ISocialsConfig>({
        keys: SOCIALS_CONFIG,
        url: 'socials/config/'
    })
}


export function useMySocials(){
    return useBaseQuery<ISocials>({
        keys: SOCIALS_MY,
        url: 'socials/'
    })
}

export function useMySocialDisconnect() {
    return useBaseMutation<unknown, AxiosResponse>({
        url: `socials/authorize/`,
        method: 'delete',
    }, SOCIALS_MY)
}


export function useMySocialConnect() {
    return useMutation({
        mutationFn: async (mutationData: FormData) => {
            const {data} = await apiInstance.post('socials/authorize/', mutationData)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: SOCIALS_MY})
        }
    })
}