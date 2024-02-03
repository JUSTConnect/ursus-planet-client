const chains: {[key: string]: {}} = {
    '0x38': {
        "chainId": "0x38",
        "chainName": "BNB Chain",
        "rpcUrls": [
            "https://binance.llamarpc.com"
        ],
        "iconUrls": [
            "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
            "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029"
        ],
        "nativeCurrency": {
            "name": "BNB",
            "symbol": "BNB",
            "decimals": 18
        },
        "blockExplorerUrls": [
            "https://bscscan.com/"
        ]
    },
    '0xa4b1': {
        "chainId": "0xa4b1",
        "chainName": "Arbitrum LlamaNodes",
        "rpcUrls": [
            "https://arbitrum.llamarpc.com"
        ],
        "iconUrls": [
            "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
            "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=029"
        ],
        "nativeCurrency": {
            "name": "ARB",
            "symbol": "ARB",
            "decimals": 18
        },
        "blockExplorerUrls": [
            "https://arbiscan.io/"
        ]
    },
}

export default chains