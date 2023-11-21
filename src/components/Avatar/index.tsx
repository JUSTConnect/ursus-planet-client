import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'
import figure from './img/figure.svg'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    src?: StaticImageData
}


export default function Avatar(props: Props) {
    const getClassName = () => {
        return [
            css.avatar,
            props.className,
        ].join(' ')
    }

    return <div className={ getClassName() }>
        { props.src ?
            <Image src={props.src} alt='figure'/>
            :
            <Image className={css.figure} src={figure} alt='figure'/>
        }
    </div>
}