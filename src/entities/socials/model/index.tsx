export interface ISocials {
    github: string|null,
    telegram: string|null,
    discord: string|null,
    x: string|null
} 


export interface ISocialConfig {
    client_id: string,
    redirect_uri: string
}


export interface ISocialsConfig {
    github: ISocialConfig,
    discord: ISocialConfig,
    x: ISocialConfig
}
