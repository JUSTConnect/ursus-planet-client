'use client'

import { useState } from "react";

import css from './index.module.scss'


export default function Checkbox() {
    const [active, setActive] = useState(false)

    return <>
        <input
            type="checkbox"
            hidden
            defaultChecked={active}
        />
        <div className={css.checkbox} onClick={ () => setActive(!active) }>
            {
                active &&
                    <div className={css.checkboxInner}></div>
            }
        </div>
    </>
}