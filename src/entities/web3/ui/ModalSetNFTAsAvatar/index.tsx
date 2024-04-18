import React, {useState, useEffect} from 'react';
import {
    Grid,
    Box,
    Flex,
    Heading,
    Text
} from "@radix-ui/themes";

import { useToast } from "@/shared/ui/Toast";
import Modal from "@/shared/ui/Modal";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";

import css from './index.module.scss'
import { NFT } from '@/entities/users/model'
import { addNftToWebhook, getWalletNFTs } from '@/entities/web3/utils/alchemyNFT'

type NFTsProp = {
    address: string,
    selectNFT: CallableFunction
}

export default function ModalSetNFTAsAvatar(props: Omit<React.ComponentProps<typeof Modal>, 'children'> & NFTsProp) {
    const {fire} = useToast()
    const [NFTs, setNFTs] = useState<Array<NFT | null>>([])

    const addNFT = (nft: NFT) => {
        let nfts = NFTs
        nfts.push(nft)
        setNFTs(nfts)
    }

    useEffect(() => {
        if (props.address) getWalletNFTs(props.address, addNFT)
    }, [props.address])

    const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const selectedNFT = NFTs[Number(e.currentTarget.id)]
        if (!selectedNFT) return

        fire({type:'success', text: 'NFT selected!'})
        props.setActive(false)
        props.selectNFT(selectedNFT)

        addNftToWebhook(selectedNFT, props.address)
    }

    return <Modal {...props} className={css.modal}>
        <Card.Root>
            <Card.Body>
                <Flex direction='column' gap='3'>
                    <Heading align='center' size='8' mb='5'>NFT from wallet</Heading>
                    <Text align='center'>choose NFT as your profile picture</Text>
                    <Card.Root>
                        <Card.Body>
                            <Grid style="max-height: 90% !important" columns='4' gap='3'>
                                {
                                    NFTs && NFTs.map((item, index) =>
                                        <Box
                                            onClick={handleSubmit}
                                            className={css.nftWrapper}
                                            id={String(index)}
                                            key={index}
                                        >
                                            <img
                                                className={css.nft}
                                                src={item?.image}
                                                alt='NFT'
                                                width={60}
                                                height={60}
                                            />         
                                        </Box>
                                    )
                                }
                            </Grid>
                        </Card.Body>
                    </Card.Root>
                    <Button onClick={() => props.setActive(false)}>Cancel</Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    </Modal>
}