import React from 'react'
import classnames from 'classnames'
import * as RadixSelect from '@radix-ui/react-select'
import { CheckIcon } from '@radix-ui/react-icons'

import css from './index.module.scss'


interface ISelectItem extends React.HTMLAttributes<HTMLDivElement> {
    value: string
    disabled?: boolean
}


const SelectItem = React.forwardRef((props: ISelectItem, forwardedRef: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <RadixSelect.Item
            className={classnames(css.SelectItem, props.className)}
            value={props.value}
            ref={forwardedRef}
        >
            <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
            <RadixSelect.ItemIndicator className={css.SelectItemIndicator}>
                <CheckIcon />
            </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
    )
})


export default SelectItem