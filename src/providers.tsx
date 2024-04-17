'use client'

import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    LedgerWalletAdapter,
    SafePalWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useMemo, useEffect } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useSelector, useDispatch } from 'react-redux';

import {
    WalletProvider as AptosProvider,
    HippoWalletAdapter,
    AptosWalletAdapter,
    HippoExtensionWalletAdapter,
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
    AptosSnapAdapter,
    FletchWalletAdapter,
    BitkeepWalletAdapter,
    SpacecyWalletAdapter,
    ONTOWalletAdapter,
    RiseWalletAdapter
} from '@manahippo/aptos-wallet-adapter';

import { WalletProvider as SuiWalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

import { Provider } from "react-redux"
import { QueryClientProvider } from "@tanstack/react-query"
import { MetaMaskContextProvider } from "@/entities/web3/hooks/useMetamask"
import { Theme } from "@radix-ui/themes"
import { queryClient } from "@/shared/api"
import { ToastProvider } from "@/shared/ui/Toast"

import { store, RootState } from '@/store'
import { addAccount } from '@/features/web3/web3Slice'

const aptosWallets = [
    new HippoWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    new HippoExtensionWalletAdapter(),
    new PontemWalletAdapter(),
    new AptosSnapAdapter(),
    new FletchWalletAdapter(),
    new BitkeepWalletAdapter(),
    new SpacecyWalletAdapter(),
    new ONTOWalletAdapter(),
    new BitkeepWalletAdapter(),
    new RiseWalletAdapter()
];

export default function Providers(props: React.HTMLAttributes<HTMLDivElement>) {
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const solanaWallets = useMemo(
      () => [
        new PhantomWalletAdapter(), new SolflareWalletAdapter({ network }),
        new LedgerWalletAdapter(), new SafePalWalletAdapter()
      ],
      [network]
    );

    const { accounts } = useSelector((state: RootState) => state.web3)
    const dispatch = useDispatch()

    useEffect(() => {
        const f = async () => {
            if (!accounts) {
                const accs = await window.ethereum?.request({ method: 'eth_accounts' })
                if (accs && accs[0]) dispatch(addAccount({address: accs[0].address, chainId: "1"}))
            }
        }
        f()
    }, [])

    return <Theme appearance="dark">
        <Provider store={store}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={solanaWallets} autoConnect>
                    <WalletModalProvider>
                        <AptosProvider
                            wallets={aptosWallets}
                            autoConnect={false}
                        >
                            <SuiWalletProvider>
                                <QueryClientProvider client={queryClient}>
                                    <MetaMaskContextProvider>
                                        <ToastProvider>
                                            {props.children}
                                        </ToastProvider>
                                    </MetaMaskContextProvider>
                                </QueryClientProvider>
                            </SuiWalletProvider>
                        </AptosProvider>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </Provider>
    </Theme> 
}