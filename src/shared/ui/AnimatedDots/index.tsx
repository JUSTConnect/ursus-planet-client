'use client'
import { useState, useEffect } from "react"

import css from './index.module.scss'


export default function AnimatedDots() {
    const [state, setState] = useState(0)

    useEffect(() => {
        const myInterval = setInterval(
            () => {
                setState((prevState) => 
                    prevState === 3 ? 0 :
                        prevState + 1
                );
            },
            200
        );
        return () => clearInterval(myInterval);
    }, [])

    return <span>
        {state >= 1 ? '.' : <span className={css.hidden}>.</span>}
        {state >= 2 ? '.' : <span className={css.hidden}>.</span>}
        {state >= 3 ? '.' : <span className={css.hidden}>.</span>}
    </span>
}