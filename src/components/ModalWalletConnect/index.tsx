import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'

import figureMetamask from './img/figure-metamask.png'
import figureTrustWallet from './img/figure-trust-wallet.png'
import figurePhantom from './img/figure-phantom.png'
import figureWalletConnect from './img/figure-wallet-connect.png'
import icon1 from './img/icon-1.png'
import icon2 from './img/icon-2.png'

import Box from '@/components/core/Box'
import Card, {CardBody} from '@/components/core/Card'
import Modal from '@/components/core/Modal'
import Typography from '@/components/core/Typography'
import Button from '@/components/core/Button'


interface Props
{
    active: boolean
    setActive: CallableFunction
}

interface Item
{
    figure: StaticImageData
    name: string
    detected?: boolean
}

const items: Item[] = [
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


export default function ModalWalletConnect(props: Props) {
    return <Modal active={props.active} setActive={props.setActive} style={{ maxWidth: '480px' }}>
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
                            <div key={item.name} className={css.item}>
                                <Image className={css.itemFigure} src={item.figure} alt='figure'/>
                                <div className={css.itemContent}>
                                    <div>
                                        <div className={css.itemTitle}>{item.name}</div>
                                        <div className={css.itemIcons}>
                                            <Image className={css.itemIcon} src={icon1} alt='icon'/>
                                            <Image className={css.itemIcon} src={icon2} alt='icon'/>
                                        </div>
                                    </div>
                                    {
                                        item.detected &&
                                            <div className={css.itemDetected}>Detected</div>
                                    }
                                </div>
                            </div>
                        )
                    }
                </Box>
                <Box>
                    <Button size="lg" color="gray" fullWidth animated>Submit</Button>
                </Box>
            </CardBody>
        </Card>
    </Modal>
}