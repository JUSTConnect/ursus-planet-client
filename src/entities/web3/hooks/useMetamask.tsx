'use client'
import { useState, useEffect, createContext, PropsWithChildren, useContext, useCallback } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

import { formatBalance } from '@/entities/web3/utils/metamask'

interface WalletState {
    accounts: any[]
    balance: string
    chainId: string
}

interface MetaMaskContextData {
    wallet: WalletState
    hasProvider: boolean | null
    error: boolean
    errorMessage: string
    isConnecting: boolean
    connectMetaMask: () => Promise<any>
    disconnectMetaMask: () => void
    isConnected: () => boolean
    clearError: () => void
}

const disconnectedState: WalletState = { accounts: [], balance: '', chainId: '' }

const MetaMaskContext = createContext<MetaMaskContextData>({} as MetaMaskContextData)

declare global {
    export interface Window {
        ethereum: any
    }
}

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null)

    const [isConnecting, setIsConnecting] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const clearError = () => setErrorMessage('')

    const [wallet, setWallet] = useState(disconnectedState)
    // useCallback ensures that you don't uselessly recreate the _updateWallet function on every render
    const _updateWallet = useCallback(async (providedAccounts?: any) => {
        const accounts = providedAccounts || await window.ethereum?.request(
            { method: 'eth_accounts' },
        )
        if (accounts.length === 0) {
            // If there are no accounts, then the user is disconnected
            setWallet(disconnectedState)
            return
        }

        const balance = formatBalance(await window.ethereum?.request({
            method: 'eth_getBalance',
            params: [accounts[0], 'latest'],
        }) as string)
        const chainId = await window.ethereum?.request({
            method: 'eth_chainId',
        })

        setWallet({ accounts, balance, chainId: chainId as string })
    }, [])

    const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet])
    const updateWallet = useCallback((accounts: any) => _updateWallet(accounts), [_updateWallet])

    /**
     * This logic checks if MetaMask is installed. If it is, some event handlers are set up
     * to update the wallet state when MetaMask changes. The function returned by useEffect
     * is used as a "cleanup": it removes the event handlers whenever the MetaMaskProvider
     * is unmounted.
     */
    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true })
            setHasProvider(Boolean(provider))

            if (provider) {
                updateWalletAndAccounts()
                window.ethereum?.on('accountsChanged', updateWallet)
                window.ethereum?.on('chainChanged', updateWalletAndAccounts)
            }
        }

        getProvider()

        return () => {
            window.ethereum?.removeListener('accountsChanged', updateWallet)
            window.ethereum?.removeListener('chainChanged', updateWalletAndAccounts)
        }
    }, [updateWallet, updateWalletAndAccounts])

    const connectMetaMask = async () => {
        setIsConnecting(true)

        try {
            const accounts = await window.ethereum?.request({
                method: 'eth_requestAccounts',
            })
            clearError()
            updateWallet(accounts)
            setIsConnecting(false)
            signMessage(accounts[0])
            return true
        } catch (err: any) {
            setErrorMessage(err.message)
            setIsConnecting(false)
            return false
        }
    }

    const disconnectMetaMask = async () => {
        try {
            await window.ethereum?.request({
                "method": "wallet_revokePermissions",
                "params": [
                    {
                        "eth_accounts": {}
                    }
                ]
            });
        } catch (err: any) {
            setErrorMessage(err.message)
        }
    }

    const signMessage = async (address: string) => {
        await window.ethereum?.request({
            method: 'personal_sign',
            params: ['Welcome to Ursas Planet. Accept terms and conditions', address]
        })
    }

    const isConnected = () => {
        return wallet.accounts.length > 0
    }

    return (
        <MetaMaskContext.Provider
            value={{
                wallet,
                hasProvider,
                error: !!errorMessage,
                errorMessage,
                isConnecting,
                connectMetaMask,
                disconnectMetaMask,
                isConnected,
                clearError,
            }}
        >
            {children}
        </MetaMaskContext.Provider>
    )
}

export const useMetaMask = () => {
    const context = useContext(MetaMaskContext)
    if (context === undefined) {
        throw new Error('useMetaMask must be used within a "MetaMaskContextProvider"')
    }
    return context
}