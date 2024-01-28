'use client'

import { useState } from 'react'

import css from './index.module.scss'


interface ISwitch extends React.HTMLAttributes<HTMLInputElement>
{
    onSwitch?: (e: boolean) => void
    name?: string
}


export default function Switch(props: ISwitch) {
    const [active, setActive] = useState(props.defaultChecked)

    return <div
        className={css.wrapper}
        onClick={ () => {props.onSwitch && props.onSwitch(!active); setActive(!active)} }
    >
        <div className={[css.switch, active && css.switchActive].join(' ')}>
            <div className={css.circle}></div>
        </div>
        <input
            className={css.checkbox}
            type="checkbox"
            checked={active}
            readOnly
            name={props.name}
            hidden
        />
    </div>
}