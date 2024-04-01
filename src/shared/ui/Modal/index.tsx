'use client'

import { useEffect } from 'react';
import { Box } from '@radix-ui/themes';

import Blur from '@/shared/ui/Blur';
import css from './index.module.scss'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    active: boolean
    setActive: CallableFunction
}


export default function Modal({
    active,
    children,
    setActive,
    style,
    className
}: Props) {

    useEffect(() => {
        addEventListener('keyup', (event) => {
            if (setActive && event.code === 'Escape') {
                setActive(false)
            }
        })
    }, [setActive])

    const getClassName = () => {
        return [
            css.modal,
            className
        ].join(' ')
    }

    if (active) {
        return <Box className={ css.container }>
            <Blur onClick={ () => setActive(false) }/>
            <Box
                className={ getClassName() }
                style={ style }
            >
                { children }
            </Box>
        </Box>
    }
    return ''
}