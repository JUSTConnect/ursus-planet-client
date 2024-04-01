import axios, {AxiosError, AxiosRequestConfig} from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@tanstack/react-query";


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL


export const queryClient = new QueryClient()


interface BaseQueryParameters {
    url: string
    extraConfig?:AxiosRequestConfig
    keys: (string|number|null)[]
}


interface BaseMutationParameters extends Omit<BaseQueryParameters, 'keys'> {
    keys?: (string|number|null)[]
    method?: 'post' | 'put' | 'patch' | 'delete',
}


export type ListResponse<T> = {
    count: number,
    next: string|null,
    previous: string|null,
    results: T[]
}


export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})


export function useBaseQuery<Response>(params: BaseQueryParameters) {
    return useQuery<Response, AxiosError>(
        {
            queryKey: params.keys,
            queryFn: async () => {
                const { data } = await apiInstance.get(params.url, params.extraConfig)
                return data as Response
            },
            retry: false
        }
    )
}


export function useBaseMutation<MutationData, MutationResponse>(
    params: BaseMutationParameters,
    invalidate?: QueryKey
) {
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
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: invalidate})
    })
}