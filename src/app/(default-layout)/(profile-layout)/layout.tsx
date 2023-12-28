'use client'

import { useRouter } from 'next/router'

import PanelPlayer from '@/components/PanelPlayer'

export default function PlayerLayout(props: {
    children: React.ReactNode
}) {

    return <>
        <PanelPlayer/>
        {props.children}
    </>
}