'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import Intro from '@/widgets/Intro'
import MainGame from '@/widgets/MainGame'
import GamesBest from '@/widgets/GamesBest'
import { useUserSelfSetReferrerCookie } from '@/entities/user/api'
import Footer from '@/widgets/Footer'


export default function Home() {
  const {mutateAsync} = useUserSelfSetReferrerCookie()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    searchParams.get('referrer') &&
      mutateAsync({username: searchParams.get('referrer')}).finally(() => router.push('/'))
  }, [mutateAsync, searchParams, router])

  return <>
    <Intro/>
    <MainGame/>
    <GamesBest/>
    <Footer/>
  </>
}
