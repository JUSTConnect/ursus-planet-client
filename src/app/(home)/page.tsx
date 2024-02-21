'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { useUserSelfSetReferrerCookie } from '@/hooks/react-query/users'
import Footer from '@/components/Footer'
import Block1 from './Block1'
// import Block2 from './Block2'
// import Block3 from './Block3'
// import Block4 from './Block4'
// import Block5 from './Block5'


export default function Home() {
  const {mutate} = useUserSelfSetReferrerCookie()
  const searchParams = useSearchParams()

  useEffect(() => {
    searchParams.get('referrer') &&
      mutate({username: searchParams.get('referrer')})
  }, [mutate, searchParams])

  return <>
    <Block1/>
    {/*     
    <Block2/>
    <Block3/>
    <Block4/>
    <Block5/>
    */}
    <Footer/>
  </>
}
