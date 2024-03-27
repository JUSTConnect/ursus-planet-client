import { ITasksProject } from "@/entities/tasks/model";


export const tasks: ITasksProject[] = [
    {
        title: 'Follow Ursas twitter',
        name: 'follow_ursas_twitter',
        expiration: 'some date',
        expired: false,
        log: null,
        link: 'https://google.com',
        reward: 100
    },
    {
        title: 'Follow Ursas telegram',
        name: 'follow_ursas_twitter',
        expiration: 'some date',
        expired: false,
        log: {
            got: false,
            reward: 100
        },
        link: 'https://google.com',
        reward: 100
    },
    {
        title: 'Follow Ursas telegram',
        name: 'follow_ursas_twitter',
        expiration: 'some date',
        expired: false,
        log: {
            got: true,
            reward: 100
        },
        link: 'https://google.com',
        reward: 100
    },
]