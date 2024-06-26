'use client'
import { Switch as RadixSwitch } from "@radix-ui/themes"

import { useMeUpdate } from "@/entities/users/api"
import {IUser} from '@/entities/users/model'
import { useToast } from "@/shared/ui/Toast" 


interface ISwitch
{
    object: IUser
    name: keyof IUser
}


export default function Switch(props: ISwitch) {

    const {fire} = useToast()

    const {mutateAsync} = useMeUpdate()

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