import Image, { StaticImageData } from 'next/image'

import css from './index.module.scss'


export type AvatarSize = 'sm' | 'md' | 'lg'
export interface Props extends React.HTMLAttributes<HTMLImageElement>
{
    srcNo: StaticImageData
    src?: StaticImageData | string
    alt?: string
    size?: AvatarSize
}


export default function Avatar({
    size = 'md',
    srcNo,
    src,
    alt,
    className,
    style
}: Props) {

    const getClassName = () => {
        return [
            className,
            css.avatar,
            css[`avatar--${size}`]
        ].join(' ')
    }

    return <Image
        src={ src ? src : srcNo }
        alt={ alt || 'avatar' }
        style={ style }
        className={ getClassName() }
        height={0}
        width={0}
    />
}