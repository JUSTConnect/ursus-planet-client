export interface IUser {
    id: number
    last_login: string
    is_superuser: boolean
    is_staff: boolean
    is_active: boolean
    date_joined: string
    username: string
    email: string
    password: string
    avatar: string
    referrer: string,
    referral_quote: number
    referral_count: number
    cabinet_notifications_email: boolean
    cabinet_notifications_account: boolean
    cabinet_notifications_frequency: 'string'
    project_notifications_email: boolean
    project_notifications_account: boolean
    project_notifications_frequency: 'string'
    groups: any[]
    user_permissions: any[]
    points: number
    points_referral: number
    color1: string
    color2: string
    color3: string
    color4: string
    color5: string
}

export type NFT = {
    image: string,
    contract: string,
    tokenId: string,
    network: string
}
