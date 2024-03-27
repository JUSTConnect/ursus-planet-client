import { useBaseQuery } from "@/shared/api";


import {
    ITasksPlatform,
    ITasksSettings
} from "@/entities/tasks/model";


export function useTasksSettings() {
    return useBaseQuery<ITasksSettings>({
        keys: ['tasks-platform-settings'],
        url: 'tasks/settings/'
    })
}


export function useTasksPlatform() {
    return useBaseQuery<ITasksPlatform[]>({
        keys: ['tasks-platform'],
        url: 'tasks/platform/'
    })
}

