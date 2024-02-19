'use client'
import { useBaseQuery, useBaseMutation } from "@/hooks/react-query";


export interface ITasksPlatformLog
{
    got: boolean,
    reward: number
    user: number
}

export interface ITasksPlatform
{
    name: string,
    title: string,
    link: string,
    reward: number,
    is_active: boolean,
    log: ITasksPlatformLog
}


export function useTasksPlatform() {
    return useBaseQuery<ITasksPlatform[]>({
        keys: ['tasks-platform'],
        url: 'tasks/platform/'
    })
}


export function useTasksPlatformGetReward() {
    return useBaseMutation<{task_name: string}, any>({
        url: 'tasks/platform/get_reward/'
    })
}