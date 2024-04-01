import localFont from 'next/font/local'


export const play = localFont({src: [
    {
        path: './play/Play-Regular.woff',
        weight: '400',
        style: 'normal'
    },
    {
        path: './play/Play-Bold.woff',
        weight: '700',
        style: 'normal'
    }
], variable: '--font-play'})

export const fkalakokz = localFont({ src: './fkalakokz/fkalakokz.woff', variable: '--font-fkalakokz'})


