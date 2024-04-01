'use client'
import { useSelector, useDispatch } from 'react-redux'
import {
    Text,
    Heading,
    Box,
    Flex
} from '@radix-ui/themes'

import { RootState } from '@/store'
import { setModalWalletConnect } from '@/features/modal/modalSlice'
import Card from '@/shared/ui/Card'
import Modal from '@/shared/ui/Modal'
import Button from '@/shared/ui/Button'

import css from './index.module.scss'
import figureMetamask from './img/figure-metamask.png'
import figureWalletConnect from './img/figure-wallet-connect.png'

import Item, {IItem} from './Item'


const items: IItem[] = [
    {
        figure: figureMetamask,
        name: 'Metamask',
        detected: true
    },
    {
        figure: figureWalletConnect,
        name: 'WalletConnect'
    },
]


export default function ModalWalletConnect() {
    const dispatch = useDispatch()
    const active = useSelector((state: RootState) => state.modal.modalWalletConnect)


    return <Modal
        active={active}
        setActive={ (value: boolean) => dispatch(setModalWalletConnect(value)) }
        style={{ maxWidth: '480px', width: '100%' }}
    >
        <Card.Root className={css.card}>
            <Card.Body>
                <Box
                    mb='5'
                >
                    <Heading
                        size='8'
                        align='center'
                    >
                        Connect wallet
                    </Heading>
                    <Text
                        color='gray'
                        as='p'
                        align='center'
                    >
                        Select wallet from the list
                    </Text>
                </Box>
                <Flex
                    direction='column'
                    gap='2'
                    mb='5'
                >
                    {
                        items.map(item=>
                            <Item
                                key={item.name}
                                name={item.name}
                                detected={item.detected}
                                figure={item.figure}
                                setModalActive={ (value: boolean) => dispatch(setModalWalletConnect(value)) }
                            />
                        )
                    }
                </Flex>
                <Button
                    onClick={ () => dispatch(setModalWalletConnect(false)) }
                    color="dark"
                    fullWidth
                >
                    Cancel
                </Button>
            </Card.Body>
        </Card.Root>
    </Modal>
}