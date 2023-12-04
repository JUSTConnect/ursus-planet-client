import Image from 'next/image'

import css from './index.module.scss'
import iconArrow from './img/icon-arrow.png'

import Button, { IButton } from '@/components/core/Button'

export interface IDropdownButton extends IButton {

}

export default function DropdownButton(props: IDropdownButton) {
    const className = [
        css.button
    ].join(' ')

    return <Button
        {...props}
        className={className}
        fullWidth
        iconEnd={
            <div className={css.iconArrow}>
                <Image
                    src={iconArrow}
                    alt='icon'
                />
            </div>
        }
    >
        {props.children}
    </Button>
}