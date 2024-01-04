import css from './index.module.scss'
import Typography from '@/components/core/Typography'

import { InputProps } from '.'

interface Props extends InputProps, React.HTMLAttributes<HTMLTextAreaElement> {
    rows?: number
}


export default function TextArea({
    size = 'md',
    variant = 'contained',
    placeholder = '',
    className,
    style,
    onChange,
    onInput,
    onClick,
    defaultValue,
    value,
    label,
    error,
    required,
    disabled,
    fullWidth,
    rows
}: Props) {
    const getClassName = () => {
        return [
            css.input,
            css[`input--${size}`],
            css[`input--${variant}`],
            fullWidth && css.fullWidth,
            className,
        ].join(' ')
    }

    return <div className={css.container}>
        {label && <Typography variant='div' className={css.label}>{`${label}${required ? '*' : ''}`}</Typography>}
        <textarea
            className={getClassName()}
            style={style}
            onClick={onClick}
            onChange={onChange}
            onInput={onInput}
            defaultValue={defaultValue}
            value={value}
            placeholder={`${placeholder}${required ? '*' : ''}`}
            required={required}
            disabled={disabled}
            rows={rows}
        />
        {error && <Typography color='error' variant='div' className={css.error}>{error}</Typography>}
    </div>
}