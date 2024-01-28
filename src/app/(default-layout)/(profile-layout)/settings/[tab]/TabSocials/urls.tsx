// link: 'https://discord.com/api/oauth2/authorize?client_id=1198777405234499704&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsettings%2F%3Fauth%3Ddiscord&scope=identify',
// link: 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=RlA5clc1N3ZMb01uVlVObk5ycFc6MTpjaQ&redirect_uri=http%3A%2F%2Fleks.hooli.xyz%3A3000%2Fsettings%2F%3Fauth%3Dx&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain'
// link: 'https://oauth.telegram.org/auth?bot_id=6505934697&origin=http%3A%2F%2Fleks.hooli.xyz&embed=1&request_access=write&lang=en&return_to=http%3A%2F%2Fleks.hooli.xyz%2Fsettings'
// link: `https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.ceba5cde6dfa0cb8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsettings%2F%3Fauth%3Dgithub`,


interface IConfig {
    client_id: string
    redirect_uri: string
}


const getDiscordUrl = (config: IConfig) => {
    const url = new URL('https://discord.com/api/oauth2/authorize')
    url.searchParams.append('client_id', config.client_id)
    url.searchParams.append('response_type', 'code')
    url.searchParams.append('redirect_uri', config.redirect_uri)
    url.searchParams.append('scope', 'identify')

    return url
}

const getXUrl = (config: IConfig) => {
    const url = new URL('https://twitter.com/i/oauth2/authorize')
    url.searchParams.append('client_id', config.client_id)
    url.searchParams.append('redirect_uri', config.redirect_uri)
    url.searchParams.append('response_type', 'code')
    url.searchParams.append('scope', 'tweet.read users.read offline.access')
    url.searchParams.append('state', 'state')
    url.searchParams.append('code_challenge', 'challenge')
    url.searchParams.append('code_challenge_method', 'plain')

    return url
}

const getGithubUrl = (config: IConfig) => {
    const url = new URL('https://github.com/login/oauth/authorize')
    url.searchParams.append('scope', 'user:email')
    url.searchParams.append('client_id', config.client_id)
    url.searchParams.append('redirect_uri', config.redirect_uri)

    return url
}

export {
    getDiscordUrl,
    getXUrl,
    getGithubUrl  
}