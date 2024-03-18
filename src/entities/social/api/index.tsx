import { AxiosResponse } from "axios";
import { useBaseQuery, useBaseMutation } from "@/shared/api";

import { ISocialsConfig, ISocials } from '@/entities/social/model'

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
    return useBaseMutation({
        url: 'socials/authorize/',
        extraConfig: {
            validateStatus: (status: number) => {
                return status !== 403
            }
        }
    }, SOCIALS_MY)
}

