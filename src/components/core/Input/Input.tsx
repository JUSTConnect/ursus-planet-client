import Typography from '../Typography'

import css from './index.module.scss'
import { InputProps } from '.'


interface Props extends InputProps, React.HTMLAttributes<HTMLInputElement>
{
    type?: string
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode

    name?: string
}


export default function Input(props: Props) {

    const {
        size = 'md',
        variant = 'outlined',
        placeholder = '',
    } = props

    const computedClassName = [
        css.input,

        css[`input--${size}`],
        css[`input--${variant}`],
        
        props.fullWidth && css.fullWidth,

        props.className,
    ].join(' ')
    
    return <div 
        className={ [
            css.container,
            props.fullWidth && css.fullWidth
        ].join(' ') }
    >
        { props.label &&  <Typography variant='div' className={ css.label }>{`${props.label}${props.required ? '*' : ''}`}</Typography>}
        <div className={css.containerInput}>
            { props.iconStart && <div className={css.iconStart}>{props.iconStart}</div> }
            <input
                className={ computedClassName }
                style={ props.style }
                
                type={ props.type }
                placeholder={ `${placeholder}${props.required ? '*' : ''}` }
                defaultValue={ props.defaultValue }
                value={ props.value }
                required={ props.required }
                disabled={ props.disabled }

                // event handlers
                onClick={ props.onClick }
                onChange={ props.onChange }
                onInput={ props.onInput }

                name={props.name}
            />
            { props.iconEnd && <div className={css.iconEnd}>{props.iconEnd}</div> }
        </div>
        { props.error &&  <Typography color='error' variant='div' className={ css.error }>{ props.error }</Typography>}
    </div> 
}