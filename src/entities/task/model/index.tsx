export interface ITasksLogBase
{
    got: boolean,
    reward: number
}

export interface ITasksBase
{
    name: string,
    title: string,
    link: string,
    reward: number,
}


export interface ITasksPlatformLog extends ITasksLogBase{}
export interface ITasksPlatform extends ITasksBase
{
    log: ITasksPlatformLog|null
}


export interface ITasksProjectLog extends ITasksLogBase{}
export interface ITasksProject extends ITasksBase
{
    log: ITasksProjectLog|null
    expiration: string
    expired: boolean
}


export interface ITasksPlatformSettings
{
    cancel_fee: number,
    referral_quote: number
    referral_interest: number    
}
