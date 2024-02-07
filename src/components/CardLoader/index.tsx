import { memo } from "react"

import { RotatingLines } from "react-loader-spinner"

import css from './index.module.scss'


function CardLoader() {
    return <div className={css.wrapper}>
        <RotatingLines
            visible={true}
            width="3rem"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            strokeColor='white'
        />
    </div> 
}

export default memo(CardLoader)