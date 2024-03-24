import Image from "next/image";
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
import nft1 from './img/nft-1.png'
import nft2 from './img/nft-2.png'


export default function ModalSetNFTAsAvatar(props: Omit<React.ComponentProps<typeof Modal>, 'children'>) {
    const {fire} = useToast()

    const handleSubmit = () => {
        fire({type:'success', text: 'NFT selected!'})
        props.setActive(false)
    }


    return <Modal {...props} className={css.modal}>
        <Card.Root>
            <Card.Body>
                <Flex direction='column' gap='3'>
                    <Heading align='center' size='8' mb='5'>NFT from wallet</Heading>
                    <Text align='center'>choose NFT as your profile picture</Text>
                    <Card.Root>
                        <Card.Body>
                            <Grid columns='4' gap='3'>
                                {
                                    [nft1, nft2].map((item, index) =>
                                        <Box
                                            onClick={handleSubmit}
                                            className={css.nftWrapper}
                                            key={index}
                                        >
                                            <Image
                                                className={css.nft}
                                                src={item}
                                                alt='nft'
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