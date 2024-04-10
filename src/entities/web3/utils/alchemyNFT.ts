import { Alchemy, Network, WebhookType } from "alchemy-sdk";
import { NFT } from '@/entities/users/model'

const alchemyConfigs = [
    {
        apiKey: process.env.ALCHEMY_ETH_TOKEN,
        network: Network.ETH_MAINNET
    },
    {
        apiKey: process.env.ALCHEMY_ETH_TOKEN,
        network: Network.ARB_MAINNET
    },
    {
        apiKey: process.env.ALCHEMY_MATIC_TOKEN,
        network: Network.MATIC_MAINNET
    },
    {
        apiKey: process.env.ALCHEMY_OPT_TOKEN,
        network: Network.OPT_MAINNET
    },
    {
        apiKey: process.env.ALCHEMY_BASE_TOKEN,
        network: Network.BASE_MAINNET
    }
];

export const getWalletNFTs = async (address: string) => {
    const nfts = []
    for (const config of alchemyConfigs) {
        const alchemy = new Alchemy(config);
        const response = await alchemy.nft.getNftsForOwner(address);

        for (const nft of response.ownedNfts) {
            if (nft.contract.isSpam) continue
            const image = nft.image ? nft.image.pngUrl : nft.contract.openSeaMetadata.imageUrl
            if (!image) continue
            nfts.push({ image, contract: nft.contract.address, tokenId: nft.tokenId, network: config.network })
        }
    }
    return nfts
}

export const addNftToWebhook = async (nft: NFT, address: string) => {
    const alchemy = new Alchemy({authToken: 'PQGPycEiHp2S0Ra27cuHdeOOkqATtX-j', network: nft.network as Network});
    let webhookId = null;

    const webhooks = await alchemy.notify.getAllWebhooks()
    for (const webhook of webhooks.webhooks) {
        if (webhook.type !== WebhookType.NFT_ACTIVITY) continue
        webhookId = webhook.id
    }

    if (!webhookId) {
        return await alchemy.notify.createWebhook(
            "https://ursasplanet.com/api/nft-activity-hook",
            // @ts-ignore
            WebhookType.NFT_ACTIVITY,
            {
                addresses: [address],
                nftFilters: [{contractAddress: nft?.contract, tokenId: nft?.tokenId}]
            }
        );
    }

    await alchemy.notify.updateWebhook("wh_qv16bt12wbj9kax4", {
        addAddresses: [address]
    });

    await alchemy.notify.updateWebhook("wh_zyhqo5im08n6ougk", {
        addFilters: [{
            contractAddress: nft.contract,
            tokenId: nft.tokenId,
        }]
    });
}
