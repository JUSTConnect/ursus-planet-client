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
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

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

import { store } from './store'

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