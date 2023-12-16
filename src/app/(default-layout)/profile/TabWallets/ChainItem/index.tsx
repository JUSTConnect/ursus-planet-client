import Image from 'next/image'

import css from './index.module.scss'

import iconChain from '../img/icon-chain.png'

import Typography from '@/components/core/Typography'
import Stack from '@/components/core/Stack'


export default function ChainItem() {
    return <div className={css.item}>
        <Typography variant='p' className={css.title}>
            EVM chain
        </Typography>
        <Stack className={css.icons}>
            <Image src={iconChain} alt='icon'/>
            <Image src={iconChain} alt='icon'/>
            <Image src={iconChain} alt='icon'/>
        </Stack>
        
    </div>
}