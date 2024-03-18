import { useBaseQuery } from "@/shared/api";


import {
    ITasksPlatform,
    ITasksPlatformSettings
} from "@/entities/task/model";


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
