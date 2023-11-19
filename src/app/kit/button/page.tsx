'use client'
import { useState } from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import CircularProgress from '@mui/joy/CircularProgress';

import Button, { ButtonSize, ButtonVariant } from '@/components/Button';

const buttonSizes = [
    'sm',
    'md',
    'lg'
]

const buttonVariants = [
    'primary',
    'regular',
    'white',
    'base'
]

export default function Kit() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            {
                buttonSizes.map(size => buttonVariants.map(variant=><>
                    <Button
                        variant={variant as ButtonVariant}
                        size={size as ButtonSize}
                        onClick={ () => setIsLoading(!isLoading) }
                        iconStart={
                            isLoading ? <CircularProgress size='sm' variant="plain"/> : <LayersIcon/>
                        }
                    >
                        Hello world!
                    </Button>   
                </>))
            }
            <Button
                onClick={ () => setIsLoading(!isLoading) }
                iconStart={
                    isLoading ? <CircularProgress size='sm' variant="plain"/> : <LayersIcon/>
                }
                fullWidth
            >
                Hello world!
            </Button>
        </>
    )
}