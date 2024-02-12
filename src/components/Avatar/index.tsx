import Box from '@/components/core/Box'
import CardLoader from '@/components/CardLoader'

import css from './index.module.scss'
import Figure, {IFigure} from './img/Figure'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    isLoading: boolean
    src?: string
    colors?: IFigure
}


export default function Avatar(props: Props) {
    const getClassName = () => {
        return [
            css.avatar,
            props.className,
        ].join(' ')
    }

    return <div className={ getClassName() }>
        {
            props.isLoading ? <CardLoader/> :
            props.src ?
                <img src={props.src} alt='figure' className={css.image}/>
                :
                <Box className={css.figure}>
                    <Figure {...props.colors}/>
                </Box>
        }
    </div>
}