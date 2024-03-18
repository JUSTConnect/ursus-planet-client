'use client'
import { Switch as RadixSwitch } from "@radix-ui/themes"

import { useUserSelfUpdate } from "@/entities/user/api"
import {IUser} from '@/entities/user/model'
import { useToast } from "@/shared/ui/Toast" 


interface ISwitch
{
    object: IUser
    name: keyof IUser
}


export default function Switch(props: ISwitch) {

    const {fire} = useToast()

    const {mutateAsync} = useUserSelfUpdate()

    const handleChange = (value: boolean) => {
        mutateAsync({
            [props.name]: value 
        }).then(() => 
            fire({
                'text': 'Subscription settings changed!'
            })
        )
    }

    return <RadixSwitch
        onCheckedChange={handleChange}
        defaultChecked={!!props.object?.[props.name]}
    />  
}