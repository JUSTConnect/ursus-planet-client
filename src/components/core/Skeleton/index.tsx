import { memo } from 'react'

import css from './index.module.scss'


interface ISkeleton
{
    length: number
}


function Skeleton(props: ISkeleton) {
    return <span className={css.wrapper}>
        {
            Array.from(Array(props.length)).map((_, index)=>
                <span key={index}>&nbsp;</span>
            )
        }
    </span>
}


export default memo(Skeleton)