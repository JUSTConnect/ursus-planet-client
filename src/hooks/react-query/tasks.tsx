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

export interface ITasksPlatformSettings
{
    cancel_fee: number,
    referral_quote: number
}


export function useTasksPlatform() {
    return useBaseQuery<ITasksPlatform[]>({
        keys: ['tasks-platform'],
        url: 'tasks/platform/'
    })
}

export function useTasksPlatformSettings() {
    return useBaseQuery<ITasksPlatformSettings>({
        keys: ['tasks-platform-settings'],
        url: 'tasks/platform/settings/'
    })
}

export function useTasksPlatformGetReward() {
    return useBaseMutation<{task_name: string}, any>({
        url: 'tasks/platform/get_reward/'
    })
}


export function useTasksReferrerClaim() {
    return useBaseMutation({
        url: 'tasks/referrer/claim/'
    })
}