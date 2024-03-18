import {
    Box,
    Skeleton
} from '@radix-ui/themes'

import css from './index.module.scss'
import Figure, {IFigure} from './img/Figure'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    loading?: boolean
    src?: string
    colors?: IFigure
}


export default function Avatar(props: Props) {
    const className = [
            css.avatar,
            props.className,
    ].join(' ')

    return <Skeleton loading={props.loading}>
        <Box className={ className }>
            {
                props.src ?
                    <img src={props.src} alt='figure' className={css.image}/>
                :
                    <Box className={css.figure}>
                        <Figure {...props.colors}/>
                    </Box>
            }
        </Box>
    </Skeleton>
}