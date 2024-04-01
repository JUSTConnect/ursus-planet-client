import CardMedia from './CardMedia'


import figureDiscord from './img/figure-discord.svg'
import figureX from './img/figure-x.svg'
import figureTelegram from './img/figure-telegram.svg'
import figureGithub from './img/figure-github.svg'
import figureInstagram from './img/figure-instagram.svg'
import figureReddit from './img/figure-reddit.svg'


const media: React.ComponentProps<typeof CardMedia>[] = [
    {
        title: 'Discord',
        count_subscribers: 12304,
        figure: figureDiscord,
        link: 'https://discord.gg/ursas'
    },
    {
        title: 'X account',
        count_subscribers: 12304,
        figure: figureX,
        link: 'https://twitter.com/UrsasPlanet'
    },
    {
        title: 'Telegram',
        count_subscribers: 12304,
        figure: figureTelegram,
        link: 'https://t.me/ursasplanet'
    },
    {
        title: 'Github',
        count_subscribers: 12304,
        figure: figureGithub,
    },
    {
        title: 'Instagram',
        count_subscribers: 12304,
        figure: figureInstagram,
    },
    {
        title: 'Reddit',
        count_subscribers: 12304,
        figure: figureReddit,
    },
]


export default media