'use client'

import Image, { StaticImageData } from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import css from './index.module.scss'

import figureMetamask from './img/figure-metamask.png'
import figureTrustWallet from './img/figure-trust-wallet.png'
import figurePhantom from './img/figure-phantom.png'
import figureWalletConnect from './img/figure-wallet-connect.png'

import { RootState } from '@/store'
import { connect } from '@/features/tmp/tmpSlice'
import { setModalWalletConnect } from '@/features/modal/modalSlice'
import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'


import Item, {IItem} from './Item'


const items: IItem[] = [
    {
        figure: figureMetamask,
        name: 'Metamask',
        detected: true
    },
    {
        figure: figureTrustWallet,
        name: 'Trust wallet'
    },
    {
        figure: figurePhantom,
        name: 'Phantom'
    },
    {
        figure: figureWalletConnect,
        name: 'WalletConnect'
    },
]


export default function ModalWalletConnect() {
    const dispatch = useDispatch()
    const active = useSelector((state: RootState) => state.modal.modalWalletConnect)


    return <Modal active={active} setActive={ (value: boolean) => dispatch(setModalWalletConnect(value)) } style={{ maxWidth: '480px' }}>
        <Card className={css.card}>
            <CardBody>
                <Box mb={2}>
                    <Typography className={css.heading} variant="h3" center>Connect wallet</Typography>
                    <Typography className={css.headingBottom} color='gray' variant="p" center>
                        Select wallet from the list
                    </Typography>
                </Box>
                <Box mb={1}>
                    {
                        items.map(item=>
                            <Item
                                key={item.name}
                                name={item.name}
                                detected={item.detected}
                                figure={item.figure}
                            />
                        )
                    }
                </Box>
                <Box>
                    <Button
                        onClick={ () => dispatch(setModalWalletConnect(false)) }
                        color="gray"
                        fullWidth
                        animated
                    >
                        Cancel
                    </Button>
                </Box>
            </CardBody>
        </Card>
    </Modal>
}