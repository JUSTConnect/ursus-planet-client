import { useBaseQuery, ListResponse } from "@/shared/api";
import { TASKS, TASKS_PLATFORM, TASKS_PROJECT } from "@/entities/tasks/api/keys";


import {
    ITasksPlatform,
    ITasksProject,
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
        keys: [TASKS, TASKS_PLATFORM],
        url: 'tasks/platform/'
    })
}

export function useTasksCustom() {
    return useBaseQuery<ListResponse<ITasksProject>>({
        keys: [TASKS, TASKS_PROJECT],
        url: 'tasks/project/custom/'
    })
}