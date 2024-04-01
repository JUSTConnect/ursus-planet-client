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
import { useToast } from "@/shared/ui/Toast"


export default function useOauthRedirectHandler() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter() 

    const {fire} = useToast()
    const {mutateAsync} = useMySocialConnect()

    return useEffect(() => {
        if (searchParams.get('auth') && searchParams.get('code')) {
            const data = new FormData()
            data.append('code', searchParams.get('code')||'')
            data.append('social', searchParams.get('auth')||'')
            mutateAsync(data)
                .catch((error) => {
                    fire({text: (error as AxiosError<{detail: string}>).response?.data?.detail||'Some error occurred'})
                })
                .finally(() => {
                    router.replace(pathname)
                })
        }
    }, [mutateAsync, pathname, router, searchParams, fire])
}
