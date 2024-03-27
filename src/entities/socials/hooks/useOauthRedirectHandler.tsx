import {
    useEffect
} from "react"
import { AxiosError } from "axios"
import {
    useSearchParams,
    useRouter,
    usePathname
} from "next/navigation"

import { useMySocialConnect } from "@/entities/socials/api"


export default function useOauthRedirectHandler() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter() 

    const {mutateAsync} = useMySocialConnect()

    return useEffect(() => {
        if (searchParams.get('auth') && searchParams.get('code')) {
            const data = new FormData()
            data.append('code', searchParams.get('code')||'')
            data.append('social', searchParams.get('auth')||'')
            mutateAsync(data)
                .catch((error) => {
                    alert((error as AxiosError<{detail: string}>).response?.data?.detail)
                })
                .finally(() => {
                    router.replace(pathname)
                })
        }
    }, [mutateAsync, pathname, router, searchParams])
}
