'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import Card, { CardBody } from '@/components/core/Card'
import Modal from '@/components/core/Modal'

import css from './index.module.scss'

export default function ModalWalletConnect() {
    const [active, setActive] = useState(false)
    const accounts = useSelector((state: RootState) => state.web3.accounts)

    return <Modal className={css.modal} active={active} setActive={(value: boolean) => setActive(value)} style={{ maxWidth: '480px' }}>
        <Card>
            <CardBody>
                Debug window
                <hr />
                Accounts
                <pre>
                    {accounts.map(account =>
                        <>
                            <br />
                            Address: &nbsp;{account.address.slice(0, 4)}...{account.address.slice(-10)}
                            <br />
                            ChainID: &nbsp;{account.chainId}
                        </>
                    )}
                </pre>
            </CardBody>
        </Card>
    </Modal>
}