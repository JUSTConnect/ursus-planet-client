'use client'
import { useBaseQuery } from "@/hooks/react-query";


export interface ITasksPlatformSettings {
    id: number;
    cancel_fee: number;
    task_social_x_title: string;
    task_social_x_reward: number;
    task_social_x_is_active: boolean;
    task_social_x_link: string;
    task_social_github_title: string;
    task_social_github_reward: number;
    task_social_github_is_active: boolean;
    task_social_github_link: string;
    task_social_discord_title: string;
    task_social_discord_reward: number;
    task_social_discord_is_active: boolean;
    task_social_discord_link: string;
    task_social_telegram_title: string;
    task_social_telegram_reward: number;
    task_social_telegram_is_active: boolean;
    task_social_telegram_link: string;
    task_email_title: string;
    task_email_reward: number;
    task_email_is_active: boolean;
    task_email_link: string | null;
    task_username_title: string;
    task_username_reward: number;
    task_username_is_active: boolean;
    task_username_link: string | null;
    task_domain_id_title: string;
    task_domain_id_reward: number;
    task_domain_id_is_active: boolean;
    task_domain_id_link: string | null;
    task_avatar_title: string;
    task_avatar_reward: number;
    task_avatar_is_active: boolean;
    task_avatar_link: string | null;
    task_nft_avatar_title: string;
    task_nft_avatar_reward: number;
    task_nft_avatar_is_active: boolean;
    task_nft_avatar_link: string;
    task_ursas_collection_nft_avatar_title: string;
    task_ursas_collection_nft_avatar_reward: number;
    task_ursas_collection_nft_avatar_is_active: boolean;
    task_ursas_collection_nft_avatar_link: string;
    task_wallet_title: string;
    task_wallet_reward: number;
    task_wallet_is_active: boolean;
    task_wallet_link: string;
    task_chain_title: string;
    task_chain_reward: number;
    task_chain_is_active: boolean;
    task_chain_link: string;
    task_referral_self_title: string;
    task_referral_self_reward: number;
    task_referral_self_is_active: boolean;
    task_referral_self_link: string;
    task_email_notification_title: string;
    task_email_notification_reward: number;
    task_email_notification_is_active: boolean;
    task_email_notification_link: string;
    task_cabinet_notification_title: string;
    task_cabinet_notification_reward: number;
    task_cabinet_notification_is_active: boolean;
    task_cabinet_notification_link: string;
}


export interface ITasksPlatformLog
{
    got: boolean,
    reward: null|number
    user: number|null
}


export type ITasksPlatformLogs = {
    [key: string]: ITasksPlatformLog
}


export function useTasksPlatformSettings() {
    return useBaseQuery<ITasksPlatformSettings>({
        keys: ['tasks-platform-settings'],
        url: 'tasks/platform/'
    })
}


export function useTasksPlatformLogs() {
    return useBaseQuery<ITasksPlatformLogs>({
        keys: ['tasks-platform-logs'],
        url: 'tasks/platform/logs/'
    })
}