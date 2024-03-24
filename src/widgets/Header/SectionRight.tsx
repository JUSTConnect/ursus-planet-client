'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Flex, Skeleton } from '@radix-ui/themes'
import { useDispatch } from 'react-redux'
import c from 'classnames'
import { CgLogOut } from "react-icons/cg"
import { IoMdSettings } from "react-icons/io"
import { FaWallet } from "react-icons/fa"
import { RiArrowRightDoubleFill } from "react-icons/ri"
import { IoAddCircleSharp } from "react-icons/io5"

import { useMetaMask } from '@/entities/web3/hooks/useMetamask'
import { useLogout } from '@/entities/auth/api'
import { setModalWalletConnect } from '@/features/modal/modalSlice'
import Button from '@/shared/ui/Button'
import Dropdown from '@/shared/ui/Dropdown'

import css from './index.module.scss'

import DropdownNetwork from './DropdownNetwork'
import DropdownNotifications from './DropdownNotifications'


export default function SectionRight() {

    const router = useRouter()
    const dispatch = useDispatch()
    const [mounted, setMounted] = useState(false)    
    const [chain, setChain] = useState('')
    const { isConnected, disconnectMetaMask } = useMetaMask()
    const { mutateAsync } = useLogout()

    useEffect(()=>setMounted(true), [])    

    useEffect(() => {
        window.ethereum.on('chainChanged', () => {
            window.ethereum?.request({
                "method": "eth_chainId",
                "params": []
            }).then((res: string) => setChain(res))
        })
    }, [])

    useEffect(() => {
        window.ethereum?.request({
            "method": "eth_chainId",
            "params": []
        }).then((res: string) => setChain(res))
    }, [chain])

    const handleLogout = () => {
        mutateAsync({}).then(() => {
            disconnectMetaMask()
        })
        router.push('/')
    }

    return <Flex
        gap={{
            initial: '2',
            sm: '3'
        }}

    >
        {
            !!isConnected() &&
                <>
                    <Link href='https://forms.gle/mzmKtGQ4mqhVP6an8'>
                        <Button className='gmd' color='primary'>
                            Add your planet
                        </Button>
                        <Button className='lmd' color='primary' icon>
                            <IoAddCircleSharp />
                        </Button>
                    </Link>
                    <DropdownNotifications />
                    <DropdownNetwork chain={chain} />
                </>
        }
        <Dropdown.Root
            disabled={!isConnected()}
            className={css.dropdown}
        >
            <Dropdown.Trigger>
                <Skeleton loading={!mounted}>
                    <Button
                        className={c('gmd')}
                        onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                        color='gray'
                    >
                        { !isConnected() && <FaWallet color='gray'/> }
                        { isConnected() ? 'Connected' : 'Connect wallet'}
                        { isConnected() && <Dropdown.Arrow/>}
                    </Button>
                </Skeleton>
                <Skeleton loading={!mounted}>
                    <Button
                        onClick={() => !isConnected() && dispatch(setModalWalletConnect(true))}
                        icon
                        color='gray'
                        className={c('lmd')}
                    >
                        <FaWallet/>
                    </Button>
                </Skeleton>
            </Dropdown.Trigger>
            <Dropdown.Menu className={css.dropdownMenu}>
                <Dropdown.Item>Wallet address<FaWallet/></Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                    Logout<CgLogOut/>
                </Dropdown.Item>
                <Link href='/settings/profile'>
                    <Dropdown.Item>
                        Settings<IoMdSettings/>
                    </Dropdown.Item>
                </Link>
                <Link href='/point-system/tasks'>
                    <Dropdown.Item>
                        Point system<RiArrowRightDoubleFill/>
                    </Dropdown.Item>
                </Link>
            </Dropdown.Menu>
        </Dropdown.Root>
    </Flex>
}