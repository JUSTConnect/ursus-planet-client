import { useBaseMutation } from "@/shared/api"


export function useTasksPlatformGetReward() {
    return useBaseMutation<{task_name: string}, any>({
        url: 'tasks/platform/get_reward/'
    })
}
