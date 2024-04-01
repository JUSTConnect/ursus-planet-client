import { useMutation } from "@tanstack/react-query"

import { apiInstance, queryClient } from "@/shared/api"
import {
    TASKS,
    TASKS_PLATFORM,
    TASKS_PROJECT
} from './keys'
import {
    USER,
    USER_ME
} from '@/entities/users/api/keys'


export function useTasksPlatformGetReward() {
    return useMutation({
        mutationFn: async (mutationData: {task_name: string}) => {
            const {data} = await apiInstance.post('tasks/platform/get_reward/', mutationData)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [TASKS, TASKS_PLATFORM]})
            queryClient.invalidateQueries({queryKey: [USER, USER_ME]})
        }
    })
}


export function useTasksCustomGetReward() {
    return useMutation({
        mutationFn: async (data: {task_id: string}) => {
            return await apiInstance.post('tasks/project/custom/get_reward/', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [TASKS, TASKS_PROJECT]})
            queryClient.invalidateQueries({queryKey: [USER, USER_ME]})
        }
    })
}


export function useTasksCustomCheck() {
    return useMutation({
        mutationFn: async (data: {task_id: string}) => {
            return await apiInstance.post('tasks/project/custom/check/', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [TASKS, TASKS_PROJECT]})
        }
    })
}
