import Tabs from '@/shared/ui/Tabs'

import { IoIosSettings } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";


export default function SettingsLayout({children}: {children: React.ReactNode}) {

    return <>
        <Tabs.Container bgDrop>
            <Tabs.Button href='/settings/profile'>
                <IoIosSettings/>
                Profile
            </Tabs.Button>
            <Tabs.Button href='/settings/socials'>
                <IoShareSocial/>
                Socials
            </Tabs.Button>
            <Tabs.Button href='/settings/wallets'>
                <FaWallet/>
                Wallets
            </Tabs.Button>
            <Tabs.Button href='/settings/notifications'>
                <AiFillNotification/>
                Notifications
            </Tabs.Button>
        </Tabs.Container>
        {children}
    </>
}