'use client'

import axios, {AxiosRequestConfig} from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationKey } from "@tanstack/react-query";


const SERVER_URL = 'http://leks.hooli.xyz:8000'


interface BaseQueryParameters {
    url: string
    extraConfig?:AxiosRequestConfig
    keys: (string|number|null)[]
}

interface BaseMutationParameters extends Omit<BaseQueryParameters, 'keys'> {
    keys?: (string|number|null)[]
    method?: 'post' | 'put' | 'patch' | 'delete',
}


export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})


export function useBaseQuery<Response>(params: BaseQueryParameters) {
    return useQuery({
        queryKey: params.keys,
        queryFn: async () => {
            const { data } = await apiInstance.get(params.url, params.extraConfig)
            return data as Response
        }
    })
}


export function useBaseMutation<MutationData, MutationResponse>(params: BaseMutationParameters) {
    return useMutation({
        mutationKey: params.keys,
        mutationFn: async (mutationData: MutationData) => {
            const config: AxiosRequestConfig = {
                method: params.method || 'post',
                url: params.url,
                data: mutationData,
                ...params.extraConfig
            }
            const { data } = await apiInstance(config)
            return data as MutationResponse
        }
    })
}