'use client'
import { useState } from 'react';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import CircularProgress from '@mui/joy/CircularProgress';

import css from './index.module.scss'
import Button from '@/components/Button';
import Typography from '@/components/Typography';

export default function Kit() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <div className={ css.container }>
                <Typography variant='h1'>
                    Заголовок h1
                </Typography>
                <Typography variant='h2'>
                    Заголовок h2
                </Typography>
                <Typography variant='h3'>
                    Заголовок h3
                </Typography>
                <Typography variant='h4'>
                    Заголовок h4
                </Typography>
                <Typography variant='h5'>
                    Заголовок h5
                </Typography>
                <Typography variant='h6'>
                    Заголовок h6
                </Typography>
                <Typography variant='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam repudiandae facilis corporis mollitia unde maiores, sapiente neque nobis praesentium? Optio magni natus suscipit expedita tempora hic incidunt assumenda molestiae.
                </Typography>
                <Button
                    onClick={ () => setIsLoading(!isLoading) }
                    iconStart={
                        isLoading ? <CircularProgress size='sm' variant="plain"/> : <AppBlockingIcon/>
                    }
                >
                    Hello world!
                </Button>
                <h1>
                    Use Euro Coin on Avalanche
                </h1>
            </div>
        </>
    )
}